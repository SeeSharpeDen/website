$.get("https://api.github.com/repos/SeeSharpeDen/ssd-bot/commits", function(res) {
    const sha = res[0].sha;
    $("#LatestBotCommit").text(sha);
});

$.get("https://api.github.com/repos/SeeSharpeDen/website/commits", function(res) {
    const sha = res[0].sha;
    $("#LatestWebCommit").text(sha);
});

$.get("https://api.github.com/repos/SeeSharpeDen/PNHAuth/commits", function(res) {
    const sha = res[0].sha;
    $("#LatestPNHAuthCommit").text(sha);
});