let history = "";
        let result = "";

        function appendCharacter(character) {
            result += character;
            document.getElementById('result').innerText = result;
        }

        function clearDisplay() {
            history = "";
            result = "";
            document.getElementById('history').innerText = history;
            document.getElementById('result').innerText = "0";
        }

        function deleteLast() {
            result = result.slice(0, -1);
            document.getElementById('result').innerText = result || "0";
        }

        function calculateResult() {
            try {
                history = result;
                result = eval(result);
                document.getElementById('history').innerText = history;
                document.getElementById('result').innerText = result;
            } catch (error) {
                document.getElementById('result').innerText = "Error";
            }
        }