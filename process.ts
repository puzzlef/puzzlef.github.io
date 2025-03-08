import * as fs from "fs";
import * as os from "os";
import {Octokit, RestEndpointMethodTypes} from "@octokit/rest";
import {sleep} from "extra-sleep";




//#region TYPES
/** A gist object. */
type Gist = RestEndpointMethodTypes["gists"]["listPublic"]["response"]["data"][0];
/** Test whether a gist satisfies the condition. */
type GistTestFn = (gist: Gist) => boolean;
//#endregion




//#region HELPERS
/**
 * Read a text file.
 * @param pth path to the file
 * @returns file content
 */
async function readTextFile(pth: string) {
  var data = await fs.promises.readFile(pth, "utf8");
  return data.replace(/\r\n|\r/g, "\n");
}


/**
 * Write a text file.
 * @param pth path to the file
 * @param text file content
 */
async function writeTextFile(pth: string, text: string) {
  var data = text.replace(/\r\n|\r/g, os.EOL);
  await fs.promises.writeFile(pth, data);
}
//#endregion




//#region METHODS
/**
 * Fetch user's public gists, and filter by filename and description (regex).
 * @param octokit github api client
 * @param ft filter function (gist) => boolean
 * @returns array of matching gists
 */
async function fetchGists(octokit: Octokit, ft: GistTestFn) {
  var per_page = 100, page = 0, gists: Gist[] = [];
  while (true) {
    try { var res = await octokit.gists.list({per_page, page, public: true}); }
    catch (e) { continue; }
    var filtered = res.data.filter(ft);
    console.log(`Page ${page+1}: ${filtered.length} matching gists`);
    gists.push(...filtered);
    if (res.data.length < per_page) break;
    await sleep(1000);
    page++;
  }
  console.log(`Total ${gists.length} matching gists`);
  return gists;
}


/**
 * Fetch linked gists from a markdown file.
 * @param pth path to markdown file
 * @returns array of linked gists
 */
async function linkedGists(pth: string) {
  var re = /\[([^\]]+)\]\(https:\/\/gist\.github\.com\/[^)]+\)/g;
  var text = await readTextFile(pth);
  var matches: string[] = [], m: RegExpExecArray | null;
  while ((m = re.exec(text)) != null)
    matches.push(m[1]);
  return matches;
}


/**
 * Main function.
 */
async function main() {
  var auth    = process.env.GITHUB_TOKEN;
  var octokit = new Octokit({auth});
  var pth = "details/notes.md";
  var refilt = /NOTES$/;
  var rerepl = /\s+:\s+.*/;
  // Fetch all gists (NOTES).
  console.log("Fetching gists...");
  var ft: GistTestFn = gist => refilt.test(gist.description || "");
  var gists = await fetchGists(octokit, ft);
  // Fetch already linked gists.
  var linked = await linkedGists(pth);
  console.log(`Already linked ${linked.length} gists`);
  // Find unlinked gists.
  var unlinked = gists.filter(gist => !linked.includes(gist.description?.replace(rerepl, "") || "\0"));
  console.log(`Unlinked ${unlinked.length} gists`);
  if (unlinked.length === 0) return;
  // Append unlinked gists.
  console.log("Appending unlinked gists...");
  var text = await readTextFile(pth);
  text += "\n\n";
  unlinked.reverse();  // Gists are sorted by recent first
  for (var gist of unlinked)
    text += `- [${gist.description?.replace(rerepl, "")}](${gist.html_url})\n`;
  await writeTextFile(pth, text);
  console.log("Done\n");
}
main();
//#endregion
