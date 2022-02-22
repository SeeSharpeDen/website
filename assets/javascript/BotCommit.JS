$.get("https://api.github.com/repos/SeeSharpeDen/ssd-bot/commits", function(res) {
    const sha = res[0].sha;
    $("#LatestBotCommit").text(sha);
});