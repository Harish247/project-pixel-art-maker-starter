
// When size is submitted by the user, call makeGrid()
const submitButton = $("#submit_button");
let grid = $("#pixel_canvas");
submitButton.click(makeGrid);
function makeGrid() {
    let height = $("#input_height").val();
    let width = $("#input_width").val();
    let color = $("#colorPicker");
    let rows = $("tr");
    rows.each(function(element){
        this.remove();
    });
    for(let i=0;i<height;i++){
        grid.append(`<tr id=${i}row></tr>`);
        let gridRow = $(`#${i}row`);
        for(let j=0;j<width;j++){
            gridRow.append('<td></td');
        }
    }
    $('td').each(function(element) {
        $(this).click(function(){
            if(this.checked){
                $(this).css('background-color','#ffffff');
                $(this).removeProp('checked');
            }else{    
                $(this).css('background-color',color.val());
                $(this).prop('checked',true);
            };
        })
    });
}
