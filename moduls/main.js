// ex1
const StringFormatter = function() {

    const capitalizeFirst = function(string) {
        const val = string[0].toUpperCase() + string.substring(1).toLowerCase();
        console.log(val);
        return val;
    }

    const skewerCase = function(string) {
        const val = string.replace(" ", "-");
        console.log(val);
        return val;
    }
    return {
        capitalizeFirst: capitalizeFirst,
        skewerCase: skewerCase
    }
}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box")
    // let val = formatter.capitalizeFirst("blue box") //should print blue-box
    // val = formatter.skewerCase(val);
    // console.log(val);

// ex2
const Bank = function() {
    let _money = 500;
    const depositCash = function(number) {
        _money += number;

    }

    const showBalance = function() {
        console.log(_money);
    }

    return {
        deposit: depositCash,
        showBalance: showBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

// ex3
const SongsManager = function() {
    const _songs = {}
    const _youtubeBase = "https://www.youtube.com/watch?v="
    const addSong = function(name, url) {
        url = url.replace(_youtubeBase, "");
        _songs[name] = url;
    }

    const getSong = function(name) {
        console.log(_youtubeBase + _songs[name])
    }
    return {
        addSong: addSong,
        getSong: getSong
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ