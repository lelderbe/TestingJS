/**
 * @param {number} n - число, например: 5
 * @param {[string, string, string]} variants - массив слов в трёх вариантах склонений, например: ["яблоко", "яблока", "яблок"]
 * @description Возвращает нужную форму склонения в зависимости от числа
 * @returns {string}
 */
export function plural(n, variants) {
    let index = 2;
    if (n % 10 === 1 && n % 100 !== 11) {
        index = 0;
    } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
        index = 1;
    }
    return variants[index];
}
