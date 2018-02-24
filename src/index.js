module.exports = function solveEquation(equation) {
    let arr = equation.split(' ');
    const a = +(arr[0]);
    const b = +(arr[3] + arr[4]);
    const c = +(arr[7] + arr[8]);

    let discriminant = Math.sqrt(b ** 2 - 4 * a * c);
    let x1 = (-b + discriminant) / (2 * a);
    let x2 = (-b - discriminant) / (2 * a);
    let result = [Math.round(x1), Math.round(x2)]
    return result.sort((a, b) => a - b)
}
