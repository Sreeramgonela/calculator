let inp = document.getElementsByTagName("input")[0];

        function fun(e) {
            inp.value += e.innerText;
        }

        function res() {
            try {
                inp.value = eval(inp.value);
            } catch (e) {
                inp.value = "Error";
            }
        }

        function clr() {
            inp.value = "";
        }

        function backspace() {
            inp.value = inp.value.slice(0, -1);
        }