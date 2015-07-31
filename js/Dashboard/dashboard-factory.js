(function () {
    'use strict';

    angular
        .module('rx')
        .factory('DashboardFactory', DashboardFactory);

    DashboardFactory.$inject = ['$http'];

    function DashboardFactory($http) {


        var json = [
            {
                "id": 1,
                "index": 0,
                "guid": "4c794b22-6a60-4692-8854-81ac5e37a026",
                "isActive": false,
                "balance": "$1,102.78",
                "picture": "img/dummy-200x200-Apollo11.jpg",
                "age": 34,
                "eyeColor": "blue",
                "name": "Kathie Mckenzie",
                "gender": "female",
                "company": "PLASMOX",
                "email": "kathiemckenzie@plasmox.com",
                "phone": "+1 (897) 488-2339",
                "address": "627 Stockholm Street, Hall, New Hampshire, 8506",
                "about": "Cupidatat aute proident aute ut mollit dolore amet magna duis elit nostrud. Eiusmod fugiat laboris ipsum sunt irure. Do magna consequat dolore nulla. Amet culpa adipisicing quis magna ea adipisicing ex do.\r\n",
                "latitude": -81.767303,
                "longitude": 30.968942,
                "tags": [
                    "reprehenderit",
                    "eu",
                    "veniam",
                    "aliqua",
                    "velit",
                    "officia",
                    "ullamco"
                ],
                "friends": [
                    {
                        "id": 0,
                        "name": "Baldwin Benton"
                    },
                    {
                        "id": 1,
                        "name": "Sherri Patel"
                    },
                    {
                        "id": 2,
                        "name": "Medina Meyers"
                    }
                ],
                "greeting": "Hello, Kathie Mckenzie! You have 4 unread messages.",
                "favoriteFruit": "strawberry"
            },
            {
                "id": 2,
                "index": 1,
                "guid": "e7302339-e6cf-400a-884c-1cd297b3d889",
                "isActive": false,
                "balance": "$1,498.40",
                "picture": "img/dummy-200x200-Centurion.jpg",
                "age": 26,
                "eyeColor": "brown",
                "name": "Mia Welch",
                "gender": "female",
                "company": "BEADZZA",
                "email": "miawelch@beadzza.com",
                "phone": "+1 (844) 596-3361",
                "address": "630 Sharon Street, Cartwright, Mississippi, 5506",
                "about": "Voluptate commodo id do aliqua duis culpa magna mollit quis veniam dolore. Tempor reprehenderit culpa laborum irure consequat ex aliqua est magna consequat incididunt adipisicing pariatur. Magna qui irure amet ut dolor do magna qui. Incididunt cupidatat amet ex ea ad elit ut. Aute ut quis veniam dolor exercitation ex consectetur consequat aliquip. Labore dolor aliquip do deserunt duis incididunt nisi duis labore sint proident ex. Sint consectetur adipisicing voluptate labore minim ex Lorem excepteur elit et.\r\n",
                "latitude": -17.408252,
                "longitude": -126.389699,
                "tags": [
                    "velit",
                    "amet",
                    "enim",
                    "non",
                    "commodo",
                    "veniam",
                    "amet"
                ],
                "friends": [
                    {
                        "id": 0,
                        "name": "Ellen Salas"
                    },
                    {
                        "id": 1,
                        "name": "Mayer Casey"
                    },
                    {
                        "id": 2,
                        "name": "Pearl Powers"
                    }
                ],
                "greeting": "Hello, Mia Welch! You have 3 unread messages.",
                "favoriteFruit": "apple"
            },
            {
                "id": 3,
                "index": 2,
                "guid": "1528cd5b-765e-4dba-9fe6-5d67c53304f9",
                "isActive": true,
                "balance": "$2,372.67",
                "picture": "img/dummy-200x200-CharlesBaudelaire.jpg",
                "age": 38,
                "eyeColor": "blue",
                "name": "Goldie David",
                "gender": "female",
                "company": "ISOLOGICA",
                "email": "goldiedavid@isologica.com",
                "phone": "+1 (871) 596-3251",
                "address": "997 Arkansas Drive, Marysville, Palau, 8276",
                "about": "Veniam officia deserunt irure qui nulla dolore nisi adipisicing enim sint consequat. Ad fugiat id nostrud ullamco sunt occaecat est laborum dolor tempor cupidatat adipisicing. Lorem non aute sunt cupidatat ea irure enim.\r\n",
                "latitude": -31.814243,
                "longitude": -124.816748,
                "tags": [
                    "Lorem",
                    "labore",
                    "aliqua",
                    "mollit",
                    "minim",
                    "sunt",
                    "ipsum"
                ],
                "friends": [
                    {
                        "id": 0,
                        "name": "Penelope Barron"
                    },
                    {
                        "id": 1,
                        "name": "Melissa Fowler"
                    },
                    {
                        "id": 2,
                        "name": "Isabella Carver"
                    }
                ],
                "greeting": "Hello, Goldie David! You have 6 unread messages.",
                "favoriteFruit": "banana"
            },
            {
                "id": 4,
                "index": 3,
                "guid": "d26b58e3-652a-4c84-94aa-cb2dfd09649b",
                "isActive": false,
                "balance": "$2,566.81",
                "picture": "img/dummy-200x200-RobertDeNiro.jpg",
                "age": 28,
                "eyeColor": "blue",
                "name": "Jasmine Everett",
                "gender": "female",
                "company": "ISODRIVE",
                "email": "jasmineeverett@isodrive.com",
                "phone": "+1 (803) 436-3298",
                "address": "848 Monitor Street, Fairfield, Montana, 2597",
                "about": "Consequat magna laboris occaecat officia adipisicing culpa sunt excepteur commodo minim elit aute. Deserunt aliquip esse commodo laborum qui exercitation magna sunt excepteur proident ullamco non. Occaecat irure labore eiusmod magna deserunt. Fugiat labore veniam excepteur consequat non in Lorem deserunt. Pariatur dolore deserunt ut ea adipisicing non irure tempor ipsum laborum pariatur. Quis veniam laboris nulla aliquip ea cillum pariatur dolore veniam pariatur ex cupidatat.\r\n",
                "latitude": 88.825118,
                "longitude": -69.992967,
                "tags": [
                    "occaecat",
                    "excepteur",
                    "ad",
                    "ut",
                    "aute",
                    "laborum",
                    "Lorem"
                ],
                "friends": [
                    {
                        "id": 0,
                        "name": "Richard Curtis"
                    },
                    {
                        "id": 1,
                        "name": "Clarke Collins"
                    },
                    {
                        "id": 2,
                        "name": "Gentry Solis"
                    }
                ],
                "greeting": "Hello, Jasmine Everett! You have 6 unread messages.",
                "favoriteFruit": "apple"
            },
            {
                "id": 5,
                "index": 4,
                "guid": "312c4453-3cf1-4300-955f-1fc2b62f1f24",
                "isActive": false,
                "balance": "$3,606.06",
                "picture": "img/dummy-200x200-RobertDeNiro.jpg",
                "age": 28,
                "eyeColor": "brown",
                "name": "Flowers Alvarez",
                "gender": "male",
                "company": "BUZZWORKS",
                "email": "flowersalvarez@buzzworks.com",
                "phone": "+1 (845) 438-3667",
                "address": "740 Maujer Street, Somerset, Oregon, 2958",
                "about": "Exercitation aliqua deserunt in elit deserunt aute aliqua id quis excepteur do et. Amet ut ipsum ullamco aliquip fugiat sit mollit cillum ad commodo velit nisi. Dolore nisi quis nisi adipisicing excepteur.\r\n",
                "latitude": -33.76901,
                "longitude": 25.097152,
                "tags": [
                    "qui",
                    "occaecat",
                    "anim",
                    "Lorem",
                    "aliqua",
                    "ipsum",
                    "aliquip"
                ],
                "friends": [
                    {
                        "id": 0,
                        "name": "Stuart Petersen"
                    },
                    {
                        "id": 1,
                        "name": "Britney Finch"
                    },
                    {
                        "id": 2,
                        "name": "Evans Dejesus"
                    }
                ],
                "greeting": "Hello, Flowers Alvarez! You have 5 unread messages.",
                "favoriteFruit": "strawberry"
            }
        ];

        function save(params) {
            return $http.post('http://httpbin.org/post', params);
        }


        return {
            json: json,
            save: save
        }
    }


}());