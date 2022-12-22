let users = [];
        let item = "";
        // let userDetails = {
        // Name: 'fred',
        // age: '31',
        // sport: 'cricket'};


        setURL('https://brett-scott.developerakademie.net/Backend_example/smallest_backend_ever');

        

        async function init() {
            
            await downloadFromServer();
            users = JSON.parse(backend.getItem('users')) || [];

            console.log('my', users);
            displayEnties();

            
        }

        function displayEnties(){
            document.getElementById("names").innerHTML = ""
            for (let i = 0; i < users.length; i++) {
                user = users[i];
                document.getElementById("names").innerHTML += `<span class="userName">${user} 
                    <button onclick="deleteUser(${i})" >del</button>  
                    <button onclick="editUser(${i})" >Edit</button>
                    <button onclick="updateUserManual(${i})" >Edit Manual</button>
                    
                     </span>`;
            }

        }

        // function addDetails() {
        //     users.push(userDetails);
        //     backend.setItem('users', JSON.stringify(users));  
        // }

        function addUser() {
            users.push(username.value);
            setArray("users", users);
            //backend.setItem('users', JSON.stringify(users));
            displayEnties(); 
        }

        function deleteUser(i) {
            users.splice(i, 1)
            setArray("users", users);
            displayEnties();  
        }

        function editUser(i) {
            document.getElementById("inputBox").classList.remove('dnone')
            item = i//updateUser(i);
        }

        function updateData(item) {
            //let upate = document.getElementById('edit2').value;
            console.log('it', item)

            users[item] = edit2.value
            useNew = users
            console.log('new', useNew)
            setArray("users", useNew);
            displayEnties(); 

        }

        
        function updateUserManual(i) {
            users[i] = edit.value
            setArray("users", users);
            displayEnties(); 
        }



        function setArray(key, array) {
            backend.setItem(key, JSON.stringify(array));
        }