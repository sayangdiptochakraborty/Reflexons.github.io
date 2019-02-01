back_context = {
    "about":"def",
    "sponsors":"def",
    "contact":"def",
    "events":"def",
    "schedule":"def",
    "campus":"def",
    "config":"def",
    "tutorial":"def",
    "website":"about",
    "username":"config",
    "codecombat":"events",
    "codebeta":"events",
    "bughunt":"events",
    "debate":"events",
    "quiz":"events",
    "photography":"events",
    "pubg":"events",
    "csgo":"events",
    "line":"events"
}
var win = document.getElementById("window"),text = document.getElementById("no-js"),current_ver = "1.0";
var context = "def";
function populate_help() {
    switch (help_dict = {},
    context) {
    case "def":
        help_dict.help = "List of available commands along with their purpose",
        help_dict.about = "Know about Reflexons",
        help_dict.gallery = "See glimpses of past Reflexons through the years",
        help_dict.team = "Know the team behind it",
        help_dict.sponsors = "Get to know The list of sponsors who help us pull it through",
        help_dict.contact = "Know how to contact us",
        help_dict.events = "Get a list of all events",
        help_dict.schedule = "Schedule Of The Reflexons 2019",
        help_dict.campus = "Become A Campus Ambassador",
        help_dict.config = "Adjust configuration of this website",
        help_dict.tutorial = "Run tutorial - A complete guide on using the website",
        help_dict.clear = "Clear the output window",
        help_dict.exit = "Exit the console"
        break;
    case "about":
        help_dict.help = "List of available commands along with their purpose",
        help_dict.website = "know about the website",
        help_dict.clear = "Clear the window output",
        help_dict.exit = "Return to default prompt";
        break;
    case "config":
        help_dict.help = "List of available commands along with their purpose",
        help_dict.username = "Change your username",
        help_dict.clear = "Clear the window output",
        help_dict.exit = "Return to default prompt"
        break;
    case "events":
        help_dict.help = "List of available commands along with their purpose",
        help_dict.codecombat = "4 hour testing and toiling journey through algorithms world",
        help_dict.codebeta = "Competitve Coding for First Years and School Students",
        help_dict.bughunt = "Find the bug and debug it....",
        help_dict.quiz = "General Knowledge is not at all general",
        help_dict.debate = "Fight to keep your voice ",
        help_dict.photography = "Capture the best Moments in your camera",
        help_dict.pubg = "The new sensation..... of gamers",
        help_dict.csgo = "The always ruling multiplayer comabt game tournament",
        help_dict.line = "The first bot to complete the track wins....",
        help_dict.clear = "Clear the output window",
        help_dict.exit = "Exit the current prompt and go to upper level"
        break;
    case "codecombat" : 
        help_dict.help = "List of available commands along with their purpose",
        help_dict.details = "Know the rules and registration charges",
        help_dict.register = "Register For The Event",
        help_dict.clear = "Clear the output window",
        help_dict.exit = "Exit the current prompt and go to upper level"
        break;
    case "codebeta" : 
        help_dict.help = "List of available commands along with their purpose",
        help_dict.details = "Know the rules and registration charges",
        help_dict.register = "Register For The Event",
        help_dict.clear = "Clear the output window",
        help_dict.exit = "Exit the current prompt and go to upper level"
        break;
    case "bughunt" : 
        help_dict.help = "List of available commands along with their purpose",
        help_dict.details = "Know the rules and registration charges",
        help_dict.register = "Register For The Event",
        help_dict.clear = "Clear the output window",
        help_dict.exit = "Exit the current prompt and go to upper level"
        break;
    case "quiz" : 
        help_dict.help = "List of available commands along with their purpose",
        help_dict.details = "Know the rules and registration charges",
        help_dict.register = "Register For The Event",
        help_dict.clear = "Clear the output window",
        help_dict.exit = "Exit the current prompt and go to upper level"
        break;
    case "debate" : 
        help_dict.help = "List of available commands along with their purpose",
        help_dict.details = "Know the rules and registration charges",
        help_dict.register = "Register For The Event",
        help_dict.clear = "Clear the output window",
        help_dict.exit = "Exit the current prompt and go to upper level"
        break;
    case "photography" : 
        help_dict.help = "List of available commands along with their purpose",
        help_dict.details = "Know the rules and registration charges",
        help_dict.register = "Register For The Event",
        help_dict.clear = "Clear the output window",
        help_dict.exit = "Exit the current prompt and go to upper level"
        break;
    case "pubg" : 
        help_dict.help = "List of available commands along with their purpose",
        help_dict.details = "Know the rules and registration charges",
        help_dict.register = "Register For The Event",
        help_dict.clear = "Clear the output window",
        help_dict.exit = "Exit the current prompt and go to upper level"
        break;
    case "csgo" : 
        help_dict.help = "List of available commands along with their purpose",
        help_dict.details = "Know the rules and registration charges",
        help_dict.register = "Register For The Event",
        help_dict.clear = "Clear the output window",
        help_dict.exit = "Exit the current prompt and go to upper level"
        break;
    case "line" : 
        help_dict.help = "List of available commands along with their purpose",
        help_dict.details = "Know the rules and registration charges",
        help_dict.register = "Register For The Event",
        help_dict.clear = "Clear the output window",
        help_dict.exit = "Exit the current prompt and go to upper level"
        break;
    }
    return help_dict
}
function add_command_suggestion(n) {
    n = void 0 !== n ? n : document.getElementById("cur-prompt");
    var e = document.getElementById("suggestions");
    if (null != e && void 0 !== e) {
        var t = e.parentNode;
        null != t && void 0 !== e && t.removeChild(e)
    }
    if (null != n || void 0 !== n) {
        var o = document.createElement("table");
        o.className = "cmd-sugges",
        o.id = "suggestions";
        var r = document.createElement("tbody");
        o.appendChild(r);
        var a = document.createElement("tr");
        r.appendChild(a);
        var i = document.createElement("td");
        i.innerHTML = "<strong>Commands: </strong>",
        a.appendChild(i),
        commands = populate_help();
        var s = document.createElement("td");
        for (var p in s.width = "99%",
        a.appendChild(s),
        commands) {
            var d = document.createElement("button");
            d.innerHTML = p,
            d.className = "cmd-button",
            d.onclick = function(e) {
                n.value = e.target.textContent,
                n.disabled = !0,
                n.id = "",
                handle_input(e.target.textContent);
                var t = o.parentNode;
                null != t && void 0 !== t && t.removeChild(o),
                "name" !== context && "continue" !== context && add_prompt()
            }
            ,
            s.appendChild(d)
        }
        win.appendChild(o)
    }
}
function text_to_prompt(e, t, n) {
    n = void 0 !== n && n,
    e.value = t,
    e.disabled = !0,
    e.id = "";
    var o = document.getElementById("suggestions")
      , r = o.parentNode;
    null != r && void 0 !== r && r.removeChild(o),
    1 == n && handle_input(e.value)
}
function greet_user(e, t) {
    populate_text(1 == (t = void 0 === t || t) ? "Welcome back " + e : "Hi " + e, "h1"),
    setCookie("last_version", current_ver, 365)
}
function run_tutorial(t) {
    t = void 0 !== t ? t : null,
    populate_text("This tutorial will teach you how to use this website. <br> It should not take more than a couple of minutes."),
    context = "continue",
    add_prompt(function(e) {
        "y" == e.toLowerCase() ? (context = "def",
        inp = add_prompt(),
        text_to_prompt(inp, "", !1),
        populate_text("^ This is the default prompt. <br> The <strong>help</strong> command will show you a list of available commands along with their purpose. Try it. (Press Enter)", "str-green"),
        inp = add_prompt(function() {
            populate_text("<br> Great!<br>", "h2"),
            "y" == e.toLowerCase() ? (populate_text("Some commands will just split out the output (e.g. <strong>help</strong> command) <br> Others might take you to an alternate prompt. <br> Try the <strong>about</strong> command. (Press Enter)", "str-green"),
            inp = add_prompt(function() {
                populate_text("The <strong>help</strong> command will show a list of available commands under this prompt. Try it. (Press Enter)", "str-green"),
                inp = add_prompt(function() {
                    populate_text("<br> The <strong>exit</strong> command will take you up a level, to the default prompt. Try it. (Press Enter)", "str-green"),
                    inp = add_prompt(function() {
                        text_to_prompt(inp, "", !1),
                        populate_text("<br> The <strong>clear</strong> command will clear the output so far. Try it. (Press Enter)", "str-green"),
                        inp = add_prompt(function() {
                            populate_text("I hope you will enjoy the experience. <br><br>Type <strong>help</strong> for a list of commands", "str-green"),
                            context = "def",
                            add_prompt(),
                            null != t && t()
                        }),
                        inp.value = "clear"
                    }),
                    inp.value = "exit"
                }),
                inp.value = "help"
            }),
            inp.value = "about") : add_prompt()
        }),
        inp.value = "help") : (populate_text("<br> Type <strong>help</strong> for a list of commands", "str-green"),
        context = "def",
        add_prompt(),
        null != t && t())
    })
}
function add_class(e, t) {
    var n;
    return (n = "" == e ? [] : e.split(" ")).push(t),
    n.join(" ")
}
function make_p(e, t) {
    t = void 0 !== t ? t : "";
    var n = document.createElement("p");
    return "" != e && (n.innerHTML = e),
    "" != t && (n.className = t),
    n
}
function make_a(e, t, n) {
    var o = make_p("", n = add_class(n = void 0 !== n ? n : "", "link"))
      , r = document.createElement("a");
    return r.innerHTML = e && "" != e ? e : t,
    r.href = t,
    o.appendChild(r),
    o
}
function populate(e, t, n) {
    if (n = void 0 !== n ? n : "",
    0 != t)
        for (var o = e.childNodes, r = 0; r < o.length; ++r) {
            var a = o[r]
              , i = a.tagName;
            i && (i = i.toLowerCase()),
            a.hasChildNodes() || "a" == i ? "a" == i ? (1 < t || t < 0) && (a.innerHTML ? win.appendChild(make_a(a.innerHTML.trim(), a.href)) : win.appendChild(make_a("", a.href))) : populate(a, t - 1, "h1" == i || "h2" == i ? add_class(n, i) : n) : a.data && (str = a.data.trim(),
            str && "" != str && win.appendChild(make_p(str, n)))
        }
}
function populate_text(e, t) {
    t = void 0 !== t ? t : "";
    var n = document.createElement("p");
    return n.innerHTML = e,
    "" != t && (n.className = t),
    win.appendChild(n),
    n
}
function add_prompt(n) {
    if (n = void 0 !== n ? n : null,
    "" != context) {
        var e = document.createElement("span")
          , t = document.createElement("input");
        t.className = "input",
        t.type = "text",
        t.id = "cur-prompt";
        var o = null;
        switch (context) {
        case "def":
            var r = document.createElement("span");
            r.className = "yellow";
            var a = getCookie("username");
            r.innerHTML = "" == a ? "guest" : a.toLowerCase().split(" ").join("_");
            var i = document.createElement("span");
            i.innerHTML = "@";
            var s = document.createElement("span");
            s.className = "green",
            s.innerHTML = "reflexons.cucse.org",
            (p = document.createElement("span")).className = "green",
            p.innerHTML = "~",
            (o = document.createElement("span")).innerHTML = " $",
            e.appendChild(r),
            e.appendChild(i),
            e.appendChild(s),
            e.appendChild(p),
            t.onkeypress = function(e) {
                process_input(e, n)
            }
            ;
            break;
        case "continue":
            (p = document.createElement("span")).innerHTML = "Do you want to continue? (y/n): ",
            t.onkeyup = function(e) {
                var t = e.which || e.keyCode;
                13 != t ? (0 != t && 229 != t || (t = (t = e.target.value).charCodeAt(t.length - 1)),
                t = String.fromCharCode(t),
                e.target.value = t,
                e.target.disabled = !0,
                e.target.id = "",
                "y" == t || "Y" == t || "n" == t || "N" == t ? n(t) : (populate_text("Invalid input!"),
                add_prompt(n))) : e.target.value = ""
            }
            ,
            e.appendChild(p);
            break;
        case "name":
            (p = document.createElement("span")).className = "blue",
            p.innerHTML = "Enter your name: ",
            t.onkeypress = function(e) {
                13 != e.keyCode && 13 != e.which || (e.target.disabled = !0,
                (e.target.id = "") != e.target.value ? n(e.target.value) : add_prompt(n))
            }
            ,
            e.appendChild(p);
            break;
        default:
            var p;
            (p = document.createElement("span")).className = "green",
            p.innerHTML = context,
            (o = document.createElement("span")).innerHTML = " >",
            t.onkeypress = function(e) {
                process_input(e, n)
            }
            ,
            e.appendChild(p)
        }
        return input_wrap = document.createElement("span"),
        input_wrap.className = "input-wrap",
        o && input_wrap.appendChild(o),
        input_wrap.appendChild(t),
        pmt_wrap = document.createElement("div"),
        pmt_wrap.className = "prompt",
        pmt_wrap.appendChild(e),
        pmt_wrap.appendChild(input_wrap),
        "continue" != context && "name" != context && add_command_suggestion(t),
        win.appendChild(pmt_wrap),
        t.focus(),
        t
    }
}
function generate_table(e, t, n) {
    for (var o in t = void 0 !== t ? t : "blue",
    n = void 0 !== n ? n : "str-yellow",
    table = document.createElement("table"),
    tbody = document.createElement("tbody"),
    e)
        tr = document.createElement("tr"),
        td1 = document.createElement("td"),
        td2 = document.createElement("td"),
        td1.innerHTML = o,
        td1.className = t,
        td2.innerHTML = e[o],
        td2.className = n,
        tr.appendChild(td1),
        tr.appendChild(td2),
        tbody.appendChild(tr);
    table.appendChild(tbody),
    win.appendChild(table)
}
function handle_input(e) {
    function t() {
        populate_text("Command not found: " + e),
        populate_text("Type help for a list of commands")
    }
    switch (e = e.toLowerCase()) {
    case "help":
        generate_table(populate_help());
        break;
    case "events":
        "def" == context ? (generate_table({"1":"Code Combat","2":"Code Beta","3":"Bug Hunt","4":"Debate","5":"Quiz","6":"Photography","7":"PUBG","8":"Counter Strike - GO","9":"Follow The Line"},"blue","str-yellow"),context = "events"):t();
        break;
    case "contact":
        "def" == context ? (generate_table({"Phone Numbers ":"9434538125,9874052864,8250149961","Email ID":"reflexons.2019@gmail.com"},"yellow","green")):t();
        break;
    case "about":
        "def" == context ? (populate_text("Know about Reflexons 2019", "h1"),
        context = "about",
        populate_text("Type help for a list of commands")) : t();
        break;
    case "schedule":
        "def" == context ? generate_table({"Monday":""},"red","green"):t();
        break;
    case "campus" : 
        "def" == context ? populate_text("Acharya Prafulla Chandra Ray Shiksha Prangan was setup in the year 2013.From the year 2015 B.Tech students from 3 branches namely CSE, OOE and IT study here. From the year 2015 Reflexons was shifted here from the Rajabazar Campus. <br>Location : JD-2 Sector-3 Salt Lake : Kolkata -700106 <br>Maps Link : <a href='https://www.google.com/maps/place/University+of+Calcutta,+Technology+campus/@22.5678515,88.4155599,15z/data=!4m5!3m4!1s0x0:0x8e2706e94fa62bd3!8m2!3d22.5678515!4d88.4155599' style='color:blue'><u>Here</u></a>"):t();
        break;
    case "sponsors" :
        "def" == context ? (populate_text("Our honorable Sponsors......"),window.open("sponsors.html","_blank")):t();
        break;
    case "config":
        "def" == context ? (populate_text("Change configuration", "h1"),
        context = "config",
        populate_text("Type help for a list of commands")) : t();
        break;
    case "tutorial":
        "def" == context ? run_tutorial() : t();
        break;
    case "clear":
        for (; win.hasChildNodes(); )
            win.removeChild(win.lastChild);
        break;
    case "exit":
        "def" == context ? (node = populate_text("Goodbye!", "h1"),
        node.focus(),
        context = "") : context = back_context[context];
        break;
    case "gallery":
        "def" == context ? (populate_text("Opening the Gallery......"),window.open("gallery.html")):t();
        break;
    case "team":
        "def" == context ? (populate_text("Let's Take a look at our team......"),window.open("team.html")):t();
        break;
    case "website":
        "about" == context ? (populate_text("This is a minimalistic website based on no framework on vendor file... this website is based on <a href='https://cmd.to' class='blue'>https://cmd.to</a><br>The Website tries to imitate a Linux terminal at the topmost level.<br>&copy;Suparno Karmakar")):t();
        break;
    case "codecombat":
        "events" == context ? (populate_text("'Programs must be written for people to read, and only incidentally for machines to execute.'"),
                               generate_table({"Event Type" : "Open For All","Registration Fees " :  "100 INR per team","Max Team Size ":"2","Languages Allowed ":"C, C++, Java, Python2, Python3"},"yellow","blue"),context = "codecombat"):t();
        break;
    case "codebeta":
        "events" == context ? (populate_text("'What one programmer can do in one month, two programmers can do in two months.'<br> - Fred Brooks"),
                               generate_table({"Event Type" : "Only for First Years and School Students","Registration Fees " :  "60 INR per team","Max Team Size ":"2","Languages Allowed ":"C, C++, Java,"},"yellow","blue"),context = "codebeta"):t();
        break;
    case "bughunt":
        "events" == context ? (populate_text("'When debugging, novices insert corrective code; experts remove defective code.'<br> - Richard Pattis</h2>"),
                               generate_table({"Event Type" : "Open For All","Registration Fees " :  "100 INR per team","Max Team Size ":"2","Languages Allowed ":"C, C++, Java Python3"},"yellow","blue"),context = "bughunt"):t();
        break;
    case "debate":
        "events" == context ? (populate_text("For good ideas and true innovation, you need human interaction, conflict, argument, debate."),
                               generate_table({"Event Type" : "Open For All","Registration Fees " :  "100 INR per team","Max Team Size ":"2","Topics ":"You will be provided with once you register"},"yellow","blue"),context = "debate"):t();
        break;
    case "quiz":
        "events" == context ? (populate_text("'Isn’t life a collection of weird quizzes with no answers to half the questions?'<br> - Pawan Mishra"),
                               generate_table({"Event Type" : "Open For All","Registration Fees " :  "50 INR per team","Max Team Size ":"2"},"yellow","blue"),context = "quiz"):t();
        break;
    case "photography":
        "events" == context ? (populate_text("'In photography there is a reality so subtle that it becomes more real than reality.'"),
                               generate_table({"Event Type" : "Open For All","Registration Fees " :  "30 INR per team","Max Team Size ":"1"},"yellow","blue"),context = "photography"):t();
        break;
    case "pubg":
        "events" == context ? (populate_text('"History is written by the victors"<br> - General Shepherd'),
        generate_table({"Event Type" : "Open For All","Registration Fees " :  "25 INR per person","Allowed Team Size ":"Solo, Duo, Squad"},"yellow","blue"),context = "pubg"):t();
        break;
    case "csgo":
        "events" == context ? (populate_text("'Fire In the Hole........'"),
        generate_table({"Event Type" : "Open For All","Registration Fees " :  "200 INR per team","Allowed Team Size ":"5"},"yellow","blue"),context = "csgo"):t();
        break;
    case "line":
        "events" == context ? (populate_text("'Follow the Line..... '"),
                               generate_table({"Event Type" : "Open For All","Registration Fees " :  "100 INR per team","Allowed No Of Bots per team ":"1","Objective" : "Line Follower Bot"},"yellow","blue"),context = "line"):t();
        break;
    case "details":
        if(context == "bughunt")
        {
            populate_text("<strong class='aqua'>Each student must carry their college ID with themselves</strong>");
            generate_table({"1. ": "The Event is divided into 2 rounds",
                            "2. ":"Top teams from round 1 will advance to final round which will be on 3rd march 2019",
                            "3. ":"iming of final round will be informed to all qualified teams.",
                            "4." :"The team solving all the questions in minimum modifications will be adjudged winner of the event.",
                            "5. ":"You will not be allowed a computer",
                            "Round 1 :":"Contestant will be given 30 mins to solve 20 MCQ Questions.",
                            "Round 2 :":"Round 1: Contestant will be given 30 mins to solve 20 MCQ Questions.",
                            "Marking Scheme ":": The team solving maximum questions with minimum modifications will be adjudged winner of the event"
                        })
            populate_text("<strong class='aqua'>IN CASE OF ANY DISPUTES, THE DECISION OF EVENT CO-ORDINATOR WILL BE FINAL.</strong><br>Contact : <br>");
            generate_table({"Shaurjya Mandal":"84204 252099","Aqib Mahboob":"98831 39569"},"blue","red");
        }
        else if(context == "codecombat")
        {
            populate_text("<strong class='aqua'>Each student must carry their college ID with themselves</strong>");
            generate_table({"1" : "There will be two seperate preliminary rounds one on 11th March and other on 12th March 2019.",
                            "2" : " Both the round will start at 11pm and contestant will be give 2hrs of time to solve 4-5 programming questions and 10 MCQ questions.",
                            "3" : "One team can participate in any one of the preliminary round. ",
                            "4" : "Top teams from both the round will advance to final round which will be on 13th march 2019 ",
                            "5" : "Timing of final round will be informed to all qualified teams ",
                            "6" : "The team with highest score and lowest time wins the event. ",
                            "7" : "Every team must have atleast one active Hackerearth ID ",
                            "Marking Scheme " : " Standard marking metric based on time consumed and no of accepted test-cases "
                        });

            populate_text("<strong class='aqua'>IN CASE OF ANY DISPUTES, THE DECISION OF EVENT CO-ORDINATOR WILL BE FINAL.</strong><br>Contact : <br>");
            generate_table({"Arkadeep Baksi":"89109 45615","Shankhanil Ghosh ":"78725 24241"},"blue","red");
        }
        else if(context == "codebeta")
        {
            populate_text("<strong class='aqua'>Each student must carry their college ID with themselves</strong>");
            populate_text("<strong class='red'>If found the student is not a first year or school student then they will be disqualified on spot</strong>");
            generate_table({"1" : "There will be two seperate preliminary rounds one on 11th March and other on 12th March 2019.",
                            "2" : " Both the round will start at 11pm and contestant will be give 2hrs of time to solve 4-5 programming questions and 10 MCQ questions.",
                            "3" : "One team can participate in any one of the preliminary round. ",
                            "4" : "Top teams from both the round will advance to final round which will be on 13th march 2019 ",
                            "5" : "Timing of final round will be informed to all qualified teams ",
                            "6" : "The team with highest score and lowest time wins the event. ",
                            "7" : "Every team must have atleast one active Hackerearth ID ",
                            "Marking Scheme " : " Standard marking metric based on time consumed and no of accepted test-cases "
            });
            populate_text("<strong class='aqua'>IN CASE OF ANY DISPUTES, THE DECISION OF EVENT CO-ORDINATOR WILL BE FINAL.</strong><br>Contact : <br>");
            generate_table({"Sayangdipto Chakroborty":"91638 25442","Sounak Saha":"80170 29669"},"blue","red");
        }
        else if(context == "quiz")
        {
            populate_text("<strong class='aqua'>Each student must carry their college ID with themselves</strong>");
            generate_table({"1": "The quiz will be conducted in 2 rounds.","2" :"The first round will be the Preliminary Round which will be held in written format.",
                            "3": "Teams scoring the highest in the Preliminary Round will qualify for the Final Round","4":"Teams can be formed with members from different streams as well."});
            populate_text("<strong class='aqua'>IN CASE OF ANY DISPUTES, THE DECISION OF EVENT CO-ORDINATOR WILL BE FINAL.</strong><br>Contact : <br>");
            generate_table({"Shankhanil Ghosh ":"78725 24241","Sushmita Kumari":""},"blue","red");
        }
        else if(context == "debate")
        {
            populate_text("<strong class='aqua'>Each student must carry their college ID with themselves</strong>");
            generate_table({"1":"There will be two seperate preliminary rounds one on 11th March and other on 12th March 2019. Both the round will start at 11pm and contestant will be give 2hrs of time to solve 4-5 programming questions and 10 MCQ questions.",
                            "2":"Each team will have one member speaking for and one member speaking against the resolution.",
                            "3":"One resolution will be allotted per two teams",
                            "4":"The affirmative speaker on the first team presents arguments in support of the resolution (2+1 minutes).",
                            "5":"The opposing speaker on the second team presents arguments opposing the resolution. (2+1 minutes)",
                            "6":"The affirmative speaker on the second team presents further arguments in support of the resolution, identifies areas of conflict, and answers questions that may have been raised by the opposition speaker. (2+1 minutes).",
                            "7":"The opposing speaker on the first team presents further arguments against the resolution, identifies further areas of conflict, and answers questions that may have been raised by the previous affirmative speaker. (2+1 minutes)",
                            "8":"A short recess for teams to prepare their rebuttals. (5 minutes)",
                            "9":"The opposing team begins with the rebuttal, attempting to defend the opposing arguments and to defeat the supporting arguments without adding any new information. (3 – 5 minutes)",
                            "10":"First rebuttal of the affirmative team (3 – 5 minutes)",
                            "11":"Each team gets a second rebuttal for closing statements with the affirmative team having the last opportunity to speak. (3 – 5 minutes)",
                            "12":"Deviation from the topic frequently or overusing the same point to establish a fact will lead to disqualification.",
                            "13":"The usage of statistics to maintain one’s opinion should be very limited (at most 2) in the speaker’s supporting or opposing argumentative statements.",
                            "14":"There cannot be any interruptions. Speakers must wait their turns. The judges will enforce the rules.",
                            "15":"If you have registered as a one person member, do remember you have to speak both affirming and opposing the resolution."
                            });
            populate_text("<strong class='aqua'>IN CASE OF ANY DISPUTES, THE DECISION OF EVENT CO-ORDINATOR WILL BE FINAL.</strong><br>Contact : <br>");
            generate_table({"Shankhanil Ghosh ":"78725 24241","Sushmita Kumari":""},"blue","red");
        }
        else if(context == "photography")
        {
            populate_text("<strong class='aqua'>Each student must carry their college ID with themselves</strong>");
            generate_table({"1":"Photographs will be judged on the following parameters:- Composition, Creativity, Quality of the image.",
                            "2":"Do not resubmit your photos.",
                            "3":"Photos must be your own work, if we suspect that the work is not your own it shall be removed with an immediate effect.",
                            "4":"Submit your photos for prelims at our photography link on the day before the event.(coming soon)",
                            "5":"The theme of finals will be announced at the day of the event.",
                            });
            populate_text("<strong class='aqua'>IN CASE OF ANY DISPUTES, THE DECISION OF EVENT CO-ORDINATOR WILL BE FINAL.</strong><br>Contact : <br>");
            generate_table({"Ashita Gupta":"98308 78897","Hiya Das":"94759 16985"},"blue","red");
        }
        else if(context == "pubg")
        {
            populate_text("<strong class='aqua'>Each student must carry their college ID with themselves</strong>");
            generate_table({"1" : "Participants have to play on Campus and have to do Onspot registration.",
                            "2" : "Each participants has to bring their own device",
                            "3" : "Each Participants should have Erangel,Miramar and Sanhok maps from before hand",
                            "4" : "Each participants will be provided a stable internet connection ",
                            "5" : "Winners will get onspot prize money",
                            "6" : "At any point in the tournament the organizer/coordinator has the right to dismiss the match and disqualify a player incase of fraud detected",
                            "7" : "Participants will be given 5mins before every match to configure their controls and to enter the room",
                            "8" : "ONLY the participants will be allowed inside the competition area. NO other person will be allowed to enter the area.",
                            "9" : "Participants who do not arrive in time will be disqualified.",
                            "10" : "Winners of the second round win the competition",
                            "1st Round": "1st Round : 1 match (Erangel) ",
                            "2nd Round": "2nd Round : 3 matches -> Erangel,Miramar,Sanhok"
                        });

            populate_text("<strong class='aqua'>IN CASE OF ANY DISPUTES, THE DECISION OF EVENT CO-ORDINATOR WILL BE FINAL.</strong><br>Contact : <br>");
            generate_table({"Subhajit Gupta":"79081 80691","Shubham Kumar Das":"85830 57474"},"blue","red");
        }
        else if(context == "csgo")
        {
            populate_text("<strong class='aqua'>Each student must carry their college ID with themselves</strong>");
            generate_table({"1" : "Teams will consists of 5 members.",
                            "2" : "Each and every player must have steam and CSGO account.",
                            "3" : "Maps will be selected in veto process.",
                            "4" : "There will be 7 maps de_overpass, de_mirage, de_nuke, de_inferno, de_cache, de_train, de_cobblestone.",
                            "5" : "Each match will be of 30 rounds. First team to get 16 rounds will win the match.",
                            "6" : "Sides will be selected in knife round. Winner of the round will select the side.",
                            "7" : "Starting money will be $800 for each player.",
                            "8" : "If both team get to 15-15 draw then there will be again a match of 6 rounds. 3 rounds on each sides, first team to win 4 rounds will win. And the starting money of that round will be 6,000. If that match gets drawn again it will continue.",
                            "9" : "Each match will be elimination match.",
                            });
            populate_text("<strong class='aqua'>IN CASE OF ANY DISPUTES, THE DECISION OF EVENT CO-ORDINATOR WILL BE FINAL.</strong><br>Contact : <br>");
            generate_table({"Shubham Kumar Das":"85830 57474","Depraj Parida":"80135 54414"},"blue","red");
        }
        else if(context == "line")
        {
            populate_text("<strong class='aqua'>Each student must carry their college ID with themselves</strong>");
            generate_table({"1":"The dimension of bot should not exceed 25cmX25cmX25cm, with each parameter eligible for a tolerance of 10%",
                            "2":"Participants will be provided with a direct 220V power supply only. Any special arrangement to power the bot must be made by the participants themselves",
                            "3":"Only electrically powered fully autonomous bots are allowed. Failing to do so will lead to direct disqualification",
                            "4":"Potential difference between any two points on the bot must not exceed 24V",
                            "5":"Lego parts will not be allowed",
                            "6":"Any kind of damage to arena will lead to direct disqualification",
                            "7":"In case of disputes, decision of the event coordinator(s) will be final",
                            "8":"Width of track is about 2.5cm to 3cm",
                            "9":"5minutes will be given to the team for dry run after which the team has to start the final run",
                            "10":"For the first round, the team is required to finish a definite number of laps of the arena in the alloted time. Alloted time and number of laps will be told on the day of the event",
                            "11":"Teams that will complete the first round successfully will be eligible for the second round"
                           });
            populate_text("<strong class='aqua'>IN CASE OF ANY DISPUTES, THE DECISION OF EVENT CO-ORDINATOR WILL BE FINAL.</strong><br>Contact : <br>");
            generate_table({"Suparno Karmakar":"9434538125","Sourjya Mukherjee":"9874052864"},"blue","red");
        }
        else
        t();
        break;
    case "register":
     if(back_context[context] == "events")
     {
         populate_text("Opening Registration Page for "+context);
         window.open("registration.html","_blank");
     }
    break;
    case "username":
        "config" == context ? (context = "name",
        add_prompt(function(e) {
            var t = (new Date).getTime();
            post_user_rename(getCookie("username"), getCookie("userid"), e, t),
            setCookie("username", e, 365),
            setCookie("userid", t, 365),
            context = "config",
            add_prompt()
        })) : t();
        break;
    case "":
        break;
    default:
        t()
    }
}
function process_input(e, t) {
    t = void 0 !== t ? t : null,
    13 != e.keyCode && 13 != e.which || (e.target.disabled = !0,
    e.target.id = "",
    handle_input(e.target.value),
    null != t ? t(e.target.value) : "continue" != context && "name" != context && add_prompt())
}
function setCookie(e, t, n) {
    var o = new Date;
    o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
    var r = "expires=" + o.toUTCString();
    document.cookie = e + "=" + t + ";" + r + ";path=/"
}
function getCookie(e) {
    for (var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), o = 0; o < n.length; o++) {
        for (var r = n[o]; " " == r.charAt(0); )
            r = r.substring(1);
        if (0 == r.indexOf(t))
            return r.substring(t.length, r.length)
    }
    return ""
}
function post_user_access(e) {
    console.log(e)
}
function post_user_rename(e, t, n, o) {
    console.log(e + "_" + t + " -> " + n + "_" + o)
}
function init(t) {
    t = void 0 !== t ? t : null,
    populate(text, 2);
    var e = getCookie("username")
      , n = getCookie("userid");
    "" == e || "" == n ? (populate_text("<br>Sorry, I did not catch your name"),
    context = "name",
    add_prompt(function(e) {
        n = (new Date).getTime(),
        setCookie("username", e, 365),
        setCookie("userid", n, 365),
        greet_user(e, !1),
        populate_text("---", ""),
        post_user_access(n),
        populate_text("Type <strong>help</strong> for a list of commands", "str-green"),
        populate_text("Type <strong>tutorial</strong> to run a tutorial on using this website", "str-green"),
        context = "def",
        add_prompt(),
        null != t && t()
    })) : (greet_user(e, !0),
    populate_text("---", ""),
    populate_text("Type <strong>help</strong> for a list of commands", "str-green"),
    post_user_access(n),
    add_prompt(),
    null != t && t())
}
win.onclick = function(e) {
    var t = document.getElementById("cur-prompt");
    t && t.focus()
}
;
