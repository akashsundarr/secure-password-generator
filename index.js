import express from "express";
import bodyParser from "body-parser";

const app = express();


app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/medium-password", (req, res) => {
  const medium = mediumPasswords[Math.floor(Math.random() * mediumPasswords.length)];
  res.render("index.ejs", {
    mediumpass: medium,
  });
});

app.post("/high-password", (req, res) => {
  const high = highPasswords[Math.floor(Math.random() * highPasswords.length)];
  res.render("index.ejs", {
    highpass: high,
  });
});

app.post("/very-high-password", (req, res) => {
  const veryhigh = veryHighPasswords[Math.floor(Math.random() * veryHighPasswords.length)];
  res.render("index.ejs", {
    veryhighpass: veryhigh,
  });
});

const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});



  const mediumPasswords = [
    "Alpha2023", "Code1234", "TechWorld", "Secure99", "Magic456",
    "Power1234", "Sunshine2024", "HappyDay55", "GreenSky2023", "BrightStar99",
    "CloudyDay24", "FastRun2025", "BlueOcean88", "BigDream2023", "MorningRise2024",
    "Rocket789", "JumpyMonkey33", "CodingRocks2023", "RedApple77", "WinterStorm22",
    "SummerVibes99", "BlackHole88", "SnowyNight33", "StarrySky2023", "GoldRush2025",
    "Secret1234", "HappyCoding77", "StrongHeart44", "Sunset55", "RainyDay22",
    "WildWildWest99", "BrightFuture77", "JumpyBunny11", "GoldenKey33", "WinterMoon88",
    "BrightLights2024", "SummerHeat99", "FlyingHigh2023", "SteadyRise22", "MistyMorning11",
    "FunkyMonkey44", "MightyLion99", "DarkKnight55", "PurpleRain2024", "SpeedyFlash33",
    "DreamTeam2025", "OceanWave44", "SkyWalker2023", "SwiftRunner11", "RedDragon77",
    "GoldenSunset22", "ElectricSpark99", "CoolBreeze44", "Firefly2023", "CoolVibes2024",
    "LunarEclipse22", "CleverCat99", "GiantWave44", "MysticForest11", "SilentStorm77",
    "SilverCloud2025", "TurboSpeed33", "NightVision88", "SwiftFalcon22", "MountainPeak99",
    "UrbanCity44", "ShiningStar11", "TurboSpeed2024", "EternalFlame33", "BrightHorizon22",
    "MightyLion2023", "MysticGalaxy44", "DaringKnight99", "FierceTiger11", "DreamChaser77",
    "RedPhoenix2025", "SkylineCity22", "PurpleSky44", "GoldenWaves11", "MagicalForest99",
    "ShiningMoon33", "RisingStar2023", "SilentShadow44", "BoldEagle77", "ThunderStorm22",
    "EndlessJourney33", "MidnightSky44", "WhiteTiger99", "BlueWhale2024", "GoldenDream11",
    "BraveLion22", "ShiningSun44", "LunarMagic2023", "MightyEagle33", "RainbowSky99",
    "GloriousSunset22", "CleverFox44", "RadiantStar2025", "SolarFlare11", "LuckyCat33",
    "BoldTiger22", "RisingPhoenix44", "WinterBlizzard99", "MorningGlory11", "LightningStorm77",
    "ShiningGalaxy33", "WildWolf22", "SteadyOcean44", "Dreamer2025", "FireStorm88",
    "BrilliantSunset33", "MoonlitPath44", "EternalFire99", "SunsetDream2023", "WavesOfBlue22"
  ];
  
  const highPasswords = [
    "Pass@2023", "Code#456!", "Tech*Hub9", "Strong@9X", "Safe!12#",
    "Secure#Password", "UltraPass2024", "SuperSecure@2025", "Code#5678", "T3chH@ck2023",
    "Mighty$1234", "SafePass123!", "4ever@Secure", "TopSecret!2024", "W0rld@Pass#",
    "HighSec!2023", "P@ssw0rd#123", "Qwerty!@2025", "MyS3cur3P@ss", "SecureKey@2023",
    "R3liable$Pass", "S3cur3!C0d3", "Str0ngP@ssw0rd", "Passw0rD@2024", "S3cure#C0d3!4",
    "L1feIsSecure", "SuperP@ss!2", "P@ss!tech123", "V3ryS@f3!Key", "TrickyP@ss2024",
    "DarkKnight#9", "5ecureP@ssw0rd", "G0tMySecurePass", "Mighty@P@ssword", "P@ssw0rD123#",
    "C0d3Strong#2025", "SuperC0d3@Pass", "S@f3H@ck2024", "1ncred!bleKey", "P@ssw0rd!345",
    "SecuRe123!@2023", "D@rkH@ck5tr0ng", "Gr8Tech!Pass", "Secure#Tech09", "M@xS3cur3Key",
    "SafePassw0rd@2025", "C0mp@ny#Pass", "F!rst@Pass123", "Super$TrickyPass", "P@ssC0d3@123",
    "Sh@rp!P@ssw0rds", "S@feSecure!@#3", "H@ckP@ssW0rld", "S3cur3Co@d!3", "5ecureP@ss0rd!",
    "Strong@KeyPass", "CleverCode@Pass", "Power$Pass2024", "CrackN3ver!P@ss", "K33p!tS@feNow",
    "Sky@TechPass", "Real!SecPass24", "W@lletKey123", "GoS3cur3@Pass", "1nsecureTech@9",
    "M@ster@SafePass", "U1traSecure!12", "Tru3Key2024", "CrackProof!@#4", "NoBr3ak@Pass",
    "Tech#Code$W0rld", "Key@Pass123", "L0ngPass2024!", "Trust@KeY2025", "N0BreakPassw0rd",
    "G00dLuck@Pass", "High$Passw0rds", "S3creTCode2023", "Secured!Key2024", "Sh@rpP@ssw0rd"
  ];
  
  const veryHighPasswords = [
    "Xy#T@9!Zm2023", "Qw*P1@!#23&Lx", "Az#Xy@89!Lm*&", "P@$$w0rd!2023*", "Safe&$ecure#99!",
    "M@nyPassW0rld2024", "G00dLuck&Security", "TechGuru#2025", "Ultra$Password!4", "Secure123#@2023",
    "Best4SecurityPass", "Unbreak4ble@Pass", "Xc0d3r$P@ss2024", "9XpassW@ver#2023", "Qwerty!@xY24&",
    "4everSecureP@ss", "R@wData#2025", "S3cr3t!T3ch2024", "Cr@ckMeN0t2023", "P@ssW0rld#1234",
    "SecureWith#2024", "Sh@rpXyz2023!", "L1fe!TechC0d3", "Alpha%Key2025", "5tR0ngS3cure2024",
    "P@$$w@v3!XyZ", "SecureAnd$@2025", "TopKey!@2023", "Br@vePass!Xy#9", "G00dLuck@2024",
    "Strong!Password123", "TopCoder#Secure", "Unbr34kableKey@", "M@ster!P@ssXy#", "H@ckable!123@",
    "XSecureNow2024!", "L0ngKey!@1234", "Ch3ckYourSecurePass", "Tricky@Passw!0rld", "Pass!ForEver@2024",
    "N0Br3akS3cure", "L!feS3cur3Tech", "V3ryStrongP@ss2023", "Unbeatable!Secure", "5ecure@Life2025",
    "SafeAndSecure#44", "Tricky@M1ghtyP@ss", "High@TechP@ss", "Power!C0de2024", "T0pPassw0rld#12",
    "QuickKey@Secure", "TechWorld@Pass", "Speedy&Secured#12", "PasswordKey@2024", "SecureMeNow2025",
    "C0d3StrongPass!", "Mighty$SafePass", "GoodLuck!TechW", "TechKey#1234", "Unstoppable@Key"
  ];
  