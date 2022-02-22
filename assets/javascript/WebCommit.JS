$.get("https://api.github.com/repos/SeeSharpeDen/website/commits", function(res) {
    const sha = res[0].sha;
    $("#LatestWebCommit").text(sha);
});