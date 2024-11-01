function playRound() { 
    const choices = ['камень', 'ножницы', 'бумага'];
    let playerCount = 0;
    let computerCount = 0;

    for(let count = 1; count <= 5; ++count) {
        let playerSelection = prompt("Выберите: камень, ножницы или бумага").toLowerCase(); 
        const getComputerChoice = choices[Math.floor(Math.random() * choices.length)];
        let result;

        if (playerSelection !== 'камень' && playerSelection !== 'ножницы' && playerSelection !== 'бумага') { 
            alert("Неверный выбор! Пожалуйста, выберите камень, ножницы или бумагу."); 
            count--; 
            continue;
        }

        console.log(`Раунд: ${count}`);
        
        if(playerSelection === getComputerChoice) {
            result = `Ничья! Оба выбрали ${playerSelection}`;
        } else if(
            (playerSelection === 'камень' && getComputerChoice === 'ножницы') ||
            (playerSelection === 'ножницы' && getComputerChoice === 'бумага') ||
            (playerSelection === 'бумага' && getComputerChoice === 'камень')) {
            result = `Вы выиграли раунд! ${playerSelection} бьёт ${getComputerChoice}`;
            playerCount += 1;
        } else {
            result = `Вы проиграли! ${getComputerChoice} бьёт ${playerSelection}`;
            computerCount += 1;
        }
        
        alert(result);
    }

    alert(`Игра окончена! Вы выиграли ${playerCount} раз(а), компьютер выиграл ${computerCount} раз(а).`);
}    

playRound();