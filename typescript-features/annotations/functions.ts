const add = (a: number, b: number) => {
    return a + b;
}

const sub = (a: number, b: number): number => {
    return a - b;
}

const div = (a: number, b: number) => {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message);
}

const throwError = (message: string): string => {
    if (!message) {
        throw new Error(message);
    }
    return message;
}
/*
const logWeather = (forecast: { date: Date, weather: string }) : void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};
*/

const logWeather = ({ date, weather }: { date: Date, weather: string }) : void => {
    console.log(date);
    console.log(weather);
};

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

console.log(todaysWeather);

console.log(add(3,5));