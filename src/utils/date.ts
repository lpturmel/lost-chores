export function getDailyReset(): number {
    const now = new Date();
    const fiveAM = new Date(now.getTime());
    fiveAM.setHours(5);
    fiveAM.setMinutes(0);
    fiveAM.setSeconds(0);
    fiveAM.setMilliseconds(0);
    if (now.getHours() < 5) {
        return fiveAM.getTime() - now.getTime();
    } else {
        return fiveAM.getTime() + 24 * 60 * 60 * 1000 - now.getTime();
    }
}
export function getNextThursday() {
    var today = new Date();
    today.setDate(today.getDate() + ((4 - 1 - today.getDay() + 7) % 7) + 1);
    return today;
}
export function getWeeklyReset(): number {
    const now = new Date();
    const nextThursday = getNextThursday();

    nextThursday.setHours(5);
    nextThursday.setMinutes(0);
    nextThursday.setSeconds(0);
    nextThursday.setMilliseconds(0);
    if (now.getHours() < 5) {
        return nextThursday.getTime() - now.getTime();
    } else {
        return nextThursday.getTime() - now.getTime();
    }
}

export function formatTime(time: number): string {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
