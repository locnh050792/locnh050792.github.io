// Bài 4.
// Bạn tìm thấy 2 hòm kho báu, hòm 1 có khối lượng weight1 và có giá trị value1, hòm 2 có khối lượng weight2 và giá trị value2.
//  Bạn chỉ đủ sức để mang vật có khối lượng weight3. 
// Hãy viết một function để tính xem tổng giá trị bạn có thể lấy từ 2 hòm là bao nhiêu.
// - Đầu vào có 5 tham số là 5 số nguyên dương bao gồm weight1, value1, weight2, value2, weight3.
// - Kết quả trả về tổng giá trị cao nhất có thể lấy được. 
// Ví dụ 1: weight1 = 5, value1 = 10, weight2 = 4, value2 = 6 và weight3 = 8 thì kết quả trả về sẽ là 10 (lấy hòm 1).
// Ví dụ 2: weight1 = 5, value1 = 10, weight2 = 4, value2 = 6 và weight3 = 9 thì kết quả trả về sẽ là 16 (lấy cả 2 hòm).

function getValue(weight1,value1,weight2,value2,weight3){
    var result = 0;
    if (weight3 >= (weight1 + weight2)){
        result = value1 + value2
    }
    else{
        result = value1;
    }
    return result;
}

console.log(getValue(5,10,4,6,8));
