/* Arry.reduce() 사용 방법 정리 */
//https://miiingo.tistory.com/365

//배열의 각 요소에 대해 함수를 실행하고 누적된 값을 출력할 때 용이하다.

const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, cur, idx) => { return acc += cur; }, 0);
console.log(result);  // 15

const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.reduce((acc, cur, idx) => { return acc += cur; }, 10);
console.log(result2);  // 25

/*initialValue 값을 0으로 두었기 때문에 acc의 초기값은 0이 되고, 배열의 첫 번째 요소부터 acc에 자신의 값인 cur을 더해간다.
reduce()를 실행하고 난 뒤, 최종적으로 반환되는 값은 0 + 1 + 2 + 3 + 4 + 5 인 15이다.

만약 initialValue 값을 10으로 둔다면, acc의 초기값은 10이 되고, 배열의 첫 번째 요소부터 acc에 자신의 값인 cur을 더해가므로
최종적으로 반환되는 값은 10 + 1 + 2 + 3 + 4 + 5 인 25가 된다.
*/



/*
callback : 배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 가짐
    accumulator : 누산기. 콜백의 반환값을 누적. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값임
    currentValue : 처리할 현재 요소
    currentIndex (Optional) : 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작
    array (Optional) : reduce()를 호출한 배열

initialValue (Optional) : callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류 발생
*/