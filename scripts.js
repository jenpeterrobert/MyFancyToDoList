$('#addButton').on('click', function(){
    var inputValue = $('#inputField').val().trim();
    if (inputValue != ''){
        $('#toDoList').append(`
        <li class="listItem">
            <div class="listItemBox">
                <div class="listItemText">${inputValue}</div>
                
                <div class="listItemIcons">
                    <button class="doneButton"><i class="fas fa-check"></i></button>
                    <button class="deleteButton"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        </li>
        `);
        $('#inputField').val('');
    }
});

$('#toDoList').on('click', '.deleteButton', function(){
    $(this).closest('li').remove();
});

$('#toDoList').on('click', '.doneButton', function(){
    $('#toDoList').on('click', '.doneButton', function(){
        $(this).closest('.listItem').find('.listItemText').css({'text-decoration': 'line-through','opacity': '0.5'}).closest('.listItem').css('background-color', 'rgba(245, 245, 245, 1)');
    });
    
});
