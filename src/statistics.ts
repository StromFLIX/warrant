const sqrt2PI = Math.sqrt(2 * Math.PI);

export module Statistics.norm {
    export function pdf(x: number): number {
        return Math.pow(Math.E, -1 * Math.pow(x, 2) / 2) / Math.sqrt(2 * Math.PI);
    }

    export function cdf(x: number): number {
        if (x >= 8) return 1;
        if (x <= -8) return 0;
        let xx = x * x;
        let probability = 0;
        let n = x;
        let d = 1;
        for (let i = 3; i <= 199; i += 2) {
            let prev = probability;
            probability += n / d;
            if (prev === probability) break;
            n *= xx;
            d *= i;
        }
        probability *= Math.exp(-0.5 * xx);
        probability /= sqrt2PI;
        probability += 0.5;
        return probability;
    }
}
