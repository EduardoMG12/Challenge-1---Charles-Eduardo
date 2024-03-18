var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
var buttonLogout = document.querySelector(".button-logout");
var fieldSeconds = document.querySelector(".seconds-number");
var fieldHoursAClock = document.querySelector(".hours-a-clock");
var cityAndState = document.querySelector(".city-and-state");
var fieldDate = document.querySelector(".hours-a-clock-description");
var textDegrees = document.querySelector(".text-degrees");
var APIkey = "b5636064c57bd8c4dd2648be4f7565db";
var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=".concat(getLocalStorage() ? (_a = getLocalStorage()) === null || _a === void 0 ? void 0 : _a.city : "brasilia", "&appid=").concat(APIkey, "&units=metric&lang=pt");
function getLocalStorage() {
    var userRegistred = localStorage.getItem("user");
    if (userRegistred) {
        var recoveryUserRegistred = JSON.parse(userRegistred);
        return recoveryUserRegistred;
    }
}
function requestCityWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(requestUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Network response was not ok: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error fetching data:', error_1);
                    return [2 /*return*/, false];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var cityWeather, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, requestCityWeather()];
                case 1:
                    cityWeather = _a.sent();
                    if (cityWeather) {
                        cityAndState.innerHTML = "".concat(getLocalStorage().city, " ").concat(getLocalStorage().country.toUpperCase());
                        textDegrees.innerHTML = "".concat(cityWeather.main.temp.toFixed(0).toString(), "\u00BA");
                        console.log(cityWeather);
                    }
                    else {
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
getWeather();
//trying add weather api
// and if plenty of time don't forget implement login validation in home page, for example if user is loged don't show login page again, show only user click in logout
var daysWeek = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo"
];
var months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];
buttonLogout.onclick = function () {
    localStorage.clear();
    window.location.href = "/";
};
function updateaHours() {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    fieldHoursAClock.innerHTML = "".concat(hours, " : ").concat(minutes);
    var month = new Date().getMonth();
    var day = new Date().getDate();
    var weekDay = new Date().getDay();
    var year = new Date().getFullYear();
    fieldDate.innerHTML = "".concat(daysWeek[weekDay].toLowerCase(), ", ").concat(day, " de  ").concat(months[month].toLowerCase(), " de ").concat(year);
}
setInterval(updateaHours, 60 * 1000);
var wait = function (time) { return new Promise(function (res) { return setTimeout(res, time); }); };
function startCounter(starting_1) {
    return __awaiter(this, arguments, void 0, function (starting, delay) {
        var i;
        if (delay === void 0) { delay = 1000; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = starting;
                    _a.label = 1;
                case 1:
                    if (!(i > 0)) return [3 /*break*/, 4];
                    fieldSeconds.innerHTML = "".concat(i);
                    return [4 /*yield*/, wait(delay)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i--;
                    return [3 /*break*/, 1];
                case 4: return [4 /*yield*/, startCounter(starting, delay)];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
updateaHours();
startCounter(60, 1000);
