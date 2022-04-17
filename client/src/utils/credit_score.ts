export const CREDIT_SCORE_A: number = 679;
export const CREDIT_SCORE_B: number = 579;
export const CREDIT_SCORE_C: number = 0;

export const creditScoreFilter = (score: number): string => {
    let level = ''

    if(score >= CREDIT_SCORE_A) {
        level = 'A';
    } else if(score >= CREDIT_SCORE_B) {
        level = 'B';
    } else if(score >= CREDIT_SCORE_C) {
        level = 'C';
    }
    return level;
}
