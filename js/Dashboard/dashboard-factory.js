(function () {
    'use strict';

    angular
        .module('rx')
        .factory('DashboardFactory', DashboardFactory);

    DashboardFactory.$inject = ['$http'];

    function DashboardFactory($http) {

        var json =
            [
                {
                    "status": "closed",
                    "picture": "http://placehold.it/32x32",
                    "watchers": [
                        {
                            "id": 0,
                            "name": "Jensen Roach"
                        },
                        {
                            "id": 1,
                            "name": "Dyer Peterson"
                        },
                        {
                            "id": 2,
                            "name": "Sloan Woodard"
                        }
                    ],
                    "name": "Moore Sheppard",
                    "created": "2015-07-29T08:16:54 -02:00",
                    "company": "FANFARE",
                    "tags": [
                        "dolor",
                        "laborum",
                        "mollit",
                        "exercitation",
                        "Lorem",
                        "adipisicing",
                        "ad"
                    ],
                    "comments": [
                        {
                            "comment": "ipsum tempor sunt elit sit cupidatat velit sunt enim duis ipsum in amet esse eu",
                            "date": "2015-03-18T05:12:33 -01:00",
                            "id": 0,
                            "name": "Lillian Adams"
                        },
                        {
                            "comment": "minim pariatur officia et et deserunt reprehenderit aliqua nisi eu aliquip duis ex est ipsum",
                            "date": "2014-12-02T02:10:26 -01:00",
                            "id": 1,
                            "name": "Peggy Cash"
                        },
                        {
                            "comment": "proident occaecat sunt dolore aute ex esse fugiat consectetur irure fugiat reprehenderit commodo sint labore",
                            "date": "2014-07-18T02:26:29 -02:00",
                            "id": 2,
                            "name": "Mary Beard"
                        }
                    ],
                    "id": "56584708e19488c7ca1fabd2",
                    "task_name": "RX task created by Moore Sheppard! EMS-95 task.",
                    "email": "mooresheppard@fanfare.com",
                    "isActive": false
                },
                {
                    "status": "closed",
                    "picture": "http://placehold.it/32x32",
                    "watchers": [
                        {
                            "id": 0,
                            "name": "Summer Vasquez"
                        },
                        {
                            "id": 1,
                            "name": "Marks Ellison"
                        },
                        {
                            "id": 2,
                            "name": "Mercer Molina"
                        }
                    ],
                    "name": "Fox Hoover",
                    "created": "2015-03-06T07:33:58 -01:00",
                    "company": "OLUCORE",
                    "tags": [
                        "velit",
                        "dolore",
                        "eu",
                        "eiusmod",
                        "amet",
                        "excepteur",
                        "officia"
                    ],
                    "comments": [
                        {
                            "comment": "exercitation sunt proident commodo nisi Lorem Lorem do exercitation anim dolor ullamco qui sunt fugiat",
                            "date": "2015-09-06T07:43:26 -02:00",
                            "id": 0,
                            "name": "Amalia Moon"
                        },
                        {
                            "comment": "culpa minim enim minim Lorem ullamco deserunt consectetur proident consectetur reprehenderit non deserunt excepteur anim",
                            "date": "2014-09-16T01:56:22 -02:00",
                            "id": 1,
                            "name": "Myrtle Vang"
                        },
                        {
                            "comment": "deserunt dolor non fugiat in ut reprehenderit velit Lorem consequat proident do irure aliqua mollit",
                            "date": "2015-03-27T07:30:47 -01:00",
                            "id": 2,
                            "name": "Stanton Boyd"
                        }
                    ],
                    "id": "5658470898a044ad3b79f09c",
                    "task_name": "RX task created by Fox Hoover! EMS-80 task.",
                    "email": "foxhoover@olucore.com",
                    "isActive": true
                },
                {
                    "status": "open",
                    "picture": "http://placehold.it/32x32",
                    "watchers": [
                        {
                            "id": 0,
                            "name": "Kirkland Sweeney"
                        },
                        {
                            "id": 1,
                            "name": "Casey Hurst"
                        },
                        {
                            "id": 2,
                            "name": "Joyce Chapman"
                        }
                    ],
                    "name": "Lula Cherry",
                    "created": "2014-12-13T11:00:29 -01:00",
                    "company": "EARBANG",
                    "tags": [
                        "quis",
                        "anim",
                        "irure",
                        "duis",
                        "mollit",
                        "magna",
                        "in"
                    ],
                    "comments": [
                        {
                            "comment": "anim ut anim ullamco in non amet non nulla pariatur aliquip ad officia cillum aute",
                            "date": "2015-08-18T01:52:26 -02:00",
                            "id": 0,
                            "name": "Bass Patel"
                        },
                        {
                            "comment": "est sit in culpa nostrud non officia magna eu irure labore laboris commodo cillum eu",
                            "date": "2014-01-01T11:39:57 -01:00",
                            "id": 1,
                            "name": "Peck Bentley"
                        },
                        {
                            "comment": "dolore occaecat dolor consectetur exercitation quis occaecat qui enim velit nulla officia ullamco eu enim",
                            "date": "2014-07-23T12:11:23 -02:00",
                            "id": 2,
                            "name": "Laurel Dickson"
                        }
                    ],
                    "id": "565847080d30e616d8309160",
                    "task_name": "RX task created by Lula Cherry! EMS-140 task.",
                    "email": "lulacherry@earbang.com",
                    "isActive": true
                },
                {
                    "status": "review",
                    "picture": "http://placehold.it/32x32",
                    "watchers": [
                        {
                            "id": 0,
                            "name": "Abby Blevins"
                        },
                        {
                            "id": 1,
                            "name": "Buckley Hunter"
                        },
                        {
                            "id": 2,
                            "name": "Glover Ortega"
                        }
                    ],
                    "name": "Orr Cleveland",
                    "created": "2015-02-12T03:00:22 -01:00",
                    "company": "MULTIFLEX",
                    "tags": [
                        "nostrud",
                        "aliquip",
                        "consequat",
                        "cillum",
                        "tempor",
                        "occaecat",
                        "ut"
                    ],
                    "comments": [
                        {
                            "comment": "Lorem nostrud aliquip minim eu deserunt est aliquip fugiat non quis sit eu ipsum do",
                            "date": "2015-07-03T08:57:47 -02:00",
                            "id": 0,
                            "name": "Alexandra Bailey"
                        },
                        {
                            "comment": "mollit deserunt officia non sint excepteur proident sit qui pariatur est non quis consequat magna",
                            "date": "2014-07-20T07:16:02 -02:00",
                            "id": 1,
                            "name": "Cannon Sanders"
                        },
                        {
                            "comment": "nostrud irure ea et nulla dolor id laboris velit laborum excepteur enim mollit ad do",
                            "date": "2014-07-17T06:12:52 -02:00",
                            "id": 2,
                            "name": "Esmeralda Hancock"
                        }
                    ],
                    "id": "565847082abff8a3e0bbe56d",
                    "task_name": "RX task created by Orr Cleveland! EMS-201 task.",
                    "email": "orrcleveland@multiflex.com",
                    "isActive": true
                },
                {
                    "status": "open",
                    "picture": "http://placehold.it/32x32",
                    "watchers": [
                        {
                            "id": 0,
                            "name": "Ayers Rich"
                        },
                        {
                            "id": 1,
                            "name": "Belinda Huffman"
                        },
                        {
                            "id": 2,
                            "name": "Tina Owens"
                        }
                    ],
                    "name": "Rosie Hamilton",
                    "created": "2014-04-21T03:56:04 -02:00",
                    "company": "PASTURIA",
                    "tags": [
                        "minim",
                        "laborum",
                        "elit",
                        "do",
                        "culpa",
                        "cillum",
                        "ea"
                    ],
                    "comments": [
                        {
                            "comment": "exercitation tempor laborum ullamco duis enim ipsum irure ullamco nostrud esse excepteur anim et id",
                            "date": "2015-08-04T06:49:53 -02:00",
                            "id": 0,
                            "name": "Elizabeth Anderson"
                        },
                        {
                            "comment": "reprehenderit laborum laboris deserunt est eu sint in esse magna laborum Lorem qui deserunt deserunt",
                            "date": "2015-02-23T02:02:42 -01:00",
                            "id": 1,
                            "name": "Robert Wyatt"
                        },
                        {
                            "comment": "consectetur culpa consectetur occaecat exercitation aliquip officia nostrud velit incididunt dolor anim in sit do",
                            "date": "2015-02-04T04:06:50 -01:00",
                            "id": 2,
                            "name": "Miranda Holder"
                        }
                    ],
                    "id": "56584708a800397298d9693e",
                    "task_name": "RX task created by Rosie Hamilton! EMS-176 task.",
                    "email": "rosiehamilton@pasturia.com",
                    "isActive": true
                },
                {
                    "status": "closed",
                    "picture": "http://placehold.it/32x32",
                    "watchers": [
                        {
                            "id": 0,
                            "name": "Vincent Gaines"
                        },
                        {
                            "id": 1,
                            "name": "Estrada Pitts"
                        },
                        {
                            "id": 2,
                            "name": "Carr Willis"
                        }
                    ],
                    "name": "Ortiz Grimes",
                    "created": "2014-07-12T01:55:52 -02:00",
                    "company": "XYQAG",
                    "tags": [
                        "aute",
                        "excepteur",
                        "sint",
                        "eiusmod",
                        "consequat",
                        "Lorem",
                        "eu"
                    ],
                    "comments": [
                        {
                            "comment": "reprehenderit laboris enim laboris id Lorem ut nostrud excepteur est consequat ad magna amet aliquip",
                            "date": "2014-09-10T12:15:46 -02:00",
                            "id": 0,
                            "name": "Mclean Wilkerson"
                        },
                        {
                            "comment": "ipsum est sit sit minim irure deserunt duis nostrud incididunt incididunt commodo do occaecat adipisicing",
                            "date": "2015-10-21T12:08:33 -02:00",
                            "id": 1,
                            "name": "Ann Donaldson"
                        },
                        {
                            "comment": "minim incididunt quis nisi exercitation fugiat sit est non incididunt sit magna consectetur ad eiusmod",
                            "date": "2014-08-18T11:09:50 -02:00",
                            "id": 2,
                            "name": "Stokes Pacheco"
                        }
                    ],
                    "id": "56584708ec13e14da9715fde",
                    "task_name": "RX task created by Ortiz Grimes! EMS-992 task.",
                    "email": "ortizgrimes@xyqag.com",
                    "isActive": false
                },
                {
                    "status": "open",
                    "picture": "http://placehold.it/32x32",
                    "watchers": [
                        {
                            "id": 0,
                            "name": "Patty Hanson"
                        },
                        {
                            "id": 1,
                            "name": "Myrna Clayton"
                        },
                        {
                            "id": 2,
                            "name": "Barber Mccall"
                        }
                    ],
                    "name": "Teresa Rosario",
                    "created": "2015-04-27T12:25:48 -02:00",
                    "company": "GENMEX",
                    "tags": [
                        "nostrud",
                        "enim",
                        "veniam",
                        "excepteur",
                        "eu",
                        "qui",
                        "labore"
                    ],
                    "comments": [
                        {
                            "comment": "ut dolor laboris ea velit est occaecat deserunt fugiat in ad Lorem labore labore ullamco",
                            "date": "2014-10-17T02:39:52 -02:00",
                            "id": 0,
                            "name": "Stevenson Gillespie"
                        },
                        {
                            "comment": "consectetur excepteur nisi dolor aute aliqua aliquip laborum fugiat ullamco et laborum pariatur enim deserunt",
                            "date": "2015-08-13T06:22:30 -02:00",
                            "id": 1,
                            "name": "Glenda Mays"
                        },
                        {
                            "comment": "deserunt sit ad pariatur consectetur nisi tempor amet ipsum sit minim excepteur commodo tempor Lorem",
                            "date": "2014-06-10T01:21:50 -02:00",
                            "id": 2,
                            "name": "Hawkins Maxwell"
                        }
                    ],
                    "id": "5658470861de2150b44771f0",
                    "task_name": "RX task created by Teresa Rosario! EMS-24 task.",
                    "email": "teresarosario@genmex.com",
                    "isActive": true
                },
                {
                    "status": "open",
                    "picture": "http://placehold.it/32x32",
                    "watchers": [
                        {
                            "id": 0,
                            "name": "Haney Townsend"
                        },
                        {
                            "id": 1,
                            "name": "Henson Lewis"
                        },
                        {
                            "id": 2,
                            "name": "Thornton Atkinson"
                        }
                    ],
                    "name": "Angelia Cruz",
                    "created": "2015-04-09T09:56:52 -02:00",
                    "company": "UTARA",
                    "tags": [
                        "incididunt",
                        "aliqua",
                        "in",
                        "consequat",
                        "nostrud",
                        "amet",
                        "quis"
                    ],
                    "comments": [
                        {
                            "comment": "ullamco occaecat velit ut voluptate esse consequat incididunt ex nisi ex magna velit mollit eu",
                            "date": "2015-07-02T09:34:35 -02:00",
                            "id": 0,
                            "name": "Woodard Brooks"
                        },
                        {
                            "comment": "tempor laboris ipsum dolor laboris consectetur velit proident et pariatur qui ut id dolore ullamco",
                            "date": "2015-10-19T10:19:39 -02:00",
                            "id": 1,
                            "name": "Weber Hill"
                        },
                        {
                            "comment": "laborum tempor ut quis magna mollit exercitation veniam aliqua laborum officia tempor nostrud incididunt aliqua",
                            "date": "2014-06-19T04:38:00 -02:00",
                            "id": 2,
                            "name": "Cherry Mcfarland"
                        }
                    ],
                    "id": "56584708a27bf7b224859660",
                    "task_name": "RX task created by Angelia Cruz! EMS-466 task.",
                    "email": "angeliacruz@utara.com",
                    "isActive": false
                },
                {
                    "status": "closed",
                    "picture": "http://placehold.it/32x32",
                    "watchers": [
                        {
                            "id": 0,
                            "name": "Chen Meyers"
                        },
                        {
                            "id": 1,
                            "name": "Gloria Pickett"
                        },
                        {
                            "id": 2,
                            "name": "Guthrie Gregory"
                        }
                    ],
                    "name": "Chelsea Kelly",
                    "created": "2014-10-05T04:57:42 -02:00",
                    "company": "GEOFARM",
                    "tags": [
                        "magna",
                        "veniam",
                        "labore",
                        "velit",
                        "cillum",
                        "veniam",
                        "tempor"
                    ],
                    "comments": [
                        {
                            "comment": "sint nulla fugiat consectetur in sit ullamco nulla consectetur elit cillum amet veniam ad irure",
                            "date": "2014-12-20T09:45:12 -01:00",
                            "id": 0,
                            "name": "Mollie Carroll"
                        },
                        {
                            "comment": "sunt ea sit enim exercitation eu tempor sunt ullamco ut dolore ullamco voluptate id labore",
                            "date": "2015-07-17T05:31:48 -02:00",
                            "id": 1,
                            "name": "Nielsen Bruce"
                        },
                        {
                            "comment": "eu id ad qui id sit amet sit laborum excepteur ex dolore ut aute ut",
                            "date": "2014-06-17T01:29:26 -02:00",
                            "id": 2,
                            "name": "Kenya Park"
                        }
                    ],
                    "id": "56584708489722c884ba329e",
                    "task_name": "RX task created by Chelsea Kelly! EMS-760 task.",
                    "email": "chelseakelly@geofarm.com",
                    "isActive": false
                },
                {
                    "status": "open",
                    "picture": "http://placehold.it/32x32",
                    "watchers": [
                        {
                            "id": 0,
                            "name": "Davenport Lindsay"
                        },
                        {
                            "id": 1,
                            "name": "Bailey Craig"
                        },
                        {
                            "id": 2,
                            "name": "Calhoun Harrison"
                        }
                    ],
                    "name": "April Farrell",
                    "created": "2015-02-28T11:00:02 -01:00",
                    "company": "VELOS",
                    "tags": [
                        "reprehenderit",
                        "sit",
                        "cillum",
                        "incididunt",
                        "dolor",
                        "amet",
                        "commodo"
                    ],
                    "comments": [
                        {
                            "comment": "ipsum minim aliquip et consectetur incididunt dolore laboris Lorem Lorem duis duis reprehenderit veniam do",
                            "date": "2014-12-04T09:32:49 -01:00",
                            "id": 0,
                            "name": "Taylor Horne"
                        },
                        {
                            "comment": "et nulla sunt et et anim officia incididunt et exercitation sit nulla cillum esse amet",
                            "date": "2014-04-25T04:52:41 -02:00",
                            "id": 1,
                            "name": "Pearson Gilbert"
                        },
                        {
                            "comment": "aute incididunt consectetur do tempor veniam ad amet officia magna ut officia consequat elit non",
                            "date": "2015-11-22T08:53:11 -01:00",
                            "id": 2,
                            "name": "Edwina Wells"
                        }
                    ],
                    "id": "56584708bce9fae233968b32",
                    "task_name": "RX task created by April Farrell! EMS-867 task.",
                    "email": "aprilfarrell@velos.com",
                    "isActive": false
                },
                {
                    "status": "open",
                    "picture": "http://placehold.it/32x32",
                    "watchers": [
                        {
                            "id": 0,
                            "name": "Mcmahon Santos"
                        },
                        {
                            "id": 1,
                            "name": "Pollard Lester"
                        },
                        {
                            "id": 2,
                            "name": "Raquel Shaw"
                        }
                    ],
                    "name": "Nixon Welch",
                    "created": "2015-08-16T01:40:39 -02:00",
                    "company": "BULLZONE",
                    "tags": [
                        "laborum",
                        "elit",
                        "dolore",
                        "nostrud",
                        "sunt",
                        "quis",
                        "nisi"
                    ],
                    "comments": [
                        {
                            "comment": "do proident amet nostrud irure eu eu exercitation pariatur deserunt adipisicing quis aliqua aliqua ea",
                            "date": "2014-12-19T08:08:38 -01:00",
                            "id": 0,
                            "name": "Ballard Bernard"
                        },
                        {
                            "comment": "sit enim deserunt dolor minim amet reprehenderit veniam minim laborum cupidatat quis ea et aliqua",
                            "date": "2014-04-02T11:28:55 -02:00",
                            "id": 1,
                            "name": "Ethel Bartlett"
                        },
                        {
                            "comment": "aute culpa officia sint nulla nulla elit sit sit occaecat dolore enim laborum consectetur mollit",
                            "date": "2015-06-13T12:13:43 -02:00",
                            "id": 2,
                            "name": "Jami Sanford"
                        }
                    ],
                    "id": "56584708605accdd1009611d",
                    "task_name": "RX task created by Nixon Welch! EMS-105 task.",
                    "email": "nixonwelch@bullzone.com",
                    "isActive": false
                },
                {
                    "status": "closed",
                    "picture": "http://placehold.it/32x32",
                    "watchers": [
                        {
                            "id": 0,
                            "name": "Moreno Cooley"
                        },
                        {
                            "id": 1,
                            "name": "Blevins Miller"
                        },
                        {
                            "id": 2,
                            "name": "Lilian Estes"
                        }
                    ],
                    "name": "Fletcher Matthews",
                    "created": "2015-05-13T10:05:35 -02:00",
                    "company": "STEELFAB",
                    "tags": [
                        "commodo",
                        "duis",
                        "ipsum",
                        "aliquip",
                        "consectetur",
                        "ipsum",
                        "labore"
                    ],
                    "comments": [
                        {
                            "comment": "labore veniam consectetur irure est occaecat in adipisicing consectetur tempor commodo esse do ut mollit",
                            "date": "2014-12-23T08:49:40 -01:00",
                            "id": 0,
                            "name": "Reyna Wilkins"
                        },
                        {
                            "comment": "cillum consectetur consequat id non magna ea cupidatat mollit duis exercitation exercitation nisi culpa excepteur",
                            "date": "2014-04-06T04:48:49 -02:00",
                            "id": 1,
                            "name": "Scott Rowland"
                        },
                        {
                            "comment": "laboris velit aute velit duis minim do dolor minim duis reprehenderit duis commodo ullamco consequat",
                            "date": "2015-09-18T10:03:56 -02:00",
                            "id": 2,
                            "name": "Bruce Todd"
                        }
                    ],
                    "id": "56584708812be1d2aa590e75",
                    "task_name": "RX task created by Fletcher Matthews! EMS-911 task.",
                    "email": "fletchermatthews@steelfab.com",
                    "isActive": false
                },
                {
                    "status": "closed",
                    "picture": "http://placehold.it/32x32",
                    "watchers": [
                        {
                            "id": 0,
                            "name": "Vera Michael"
                        },
                        {
                            "id": 1,
                            "name": "Hammond Spears"
                        },
                        {
                            "id": 2,
                            "name": "Fran Duffy"
                        }
                    ],
                    "name": "Eddie Small",
                    "created": "2015-01-06T02:54:33 -01:00",
                    "company": "IMAGEFLOW",
                    "tags": [
                        "dolor",
                        "non",
                        "et",
                        "ipsum",
                        "laborum",
                        "velit",
                        "quis"
                    ],
                    "comments": [
                        {
                            "comment": "nisi consectetur cillum fugiat laboris amet anim qui consequat incididunt velit magna est fugiat exercitation",
                            "date": "2014-04-11T12:46:04 -02:00",
                            "id": 0,
                            "name": "Rasmussen Wiggins"
                        },
                        {
                            "comment": "sit veniam aliqua ad amet culpa laborum amet est ex sunt consectetur aute consectetur sit",
                            "date": "2015-01-24T12:28:48 -01:00",
                            "id": 1,
                            "name": "Vaughan Peters"
                        },
                        {
                            "comment": "ut tempor qui proident velit duis voluptate labore elit fugiat officia ut ea minim magna",
                            "date": "2014-02-19T07:48:40 -01:00",
                            "id": 2,
                            "name": "Holly Dunn"
                        }
                    ],
                    "id": "56584708d82aa858b16805d9",
                    "task_name": "RX task created by Eddie Small! EMS-640 task.",
                    "email": "eddiesmall@imageflow.com",
                    "isActive": false
                },
                {
                    "status": "open",
                    "picture": "http://placehold.it/32x32",
                    "watchers": [
                        {
                            "id": 0,
                            "name": "Lyons Oneal"
                        },
                        {
                            "id": 1,
                            "name": "Jane Hewitt"
                        },
                        {
                            "id": 2,
                            "name": "Patel Gates"
                        }
                    ],
                    "name": "Yvonne Wade",
                    "created": "2014-06-06T12:46:52 -02:00",
                    "company": "NORALI",
                    "tags": [
                        "elit",
                        "sit",
                        "esse",
                        "sunt",
                        "voluptate",
                        "aliquip",
                        "consectetur"
                    ],
                    "comments": [
                        {
                            "comment": "veniam officia sint ullamco in qui aliqua aliquip ut esse exercitation id esse exercitation minim",
                            "date": "2015-05-15T04:25:07 -02:00",
                            "id": 0,
                            "name": "Brandie Fowler"
                        },
                        {
                            "comment": "quis voluptate sunt aliquip Lorem anim adipisicing sint commodo tempor ea et eiusmod eiusmod veniam",
                            "date": "2014-06-19T07:19:52 -02:00",
                            "id": 1,
                            "name": "Chaney Delgado"
                        },
                        {
                            "comment": "proident id excepteur reprehenderit et consectetur Lorem eiusmod sint ad eiusmod dolore duis deserunt cillum",
                            "date": "2015-07-17T11:06:24 -02:00",
                            "id": 2,
                            "name": "Hendricks Faulkner"
                        }
                    ],
                    "id": "56584708ef5d9ce8d7fc7153",
                    "task_name": "RX task created by Yvonne Wade! EMS-908 task.",
                    "email": "yvonnewade@norali.com",
                    "isActive": true
                },
                {
                    "status": "review",
                    "picture": "http://placehold.it/32x32",
                    "watchers": [
                        {
                            "id": 0,
                            "name": "Shawn Romero"
                        },
                        {
                            "id": 1,
                            "name": "Wolfe Sawyer"
                        },
                        {
                            "id": 2,
                            "name": "Frederick Campbell"
                        }
                    ],
                    "name": "Warren Benton",
                    "created": "2015-07-26T11:30:19 -02:00",
                    "company": "ACRODANCE",
                    "tags": [
                        "ut",
                        "magna",
                        "Lorem",
                        "laboris",
                        "ea",
                        "Lorem",
                        "et"
                    ],
                    "comments": [
                        {
                            "comment": "irure ullamco esse proident nisi occaecat voluptate Lorem in ut mollit quis pariatur minim est",
                            "date": "2014-09-29T03:23:15 -02:00",
                            "id": 0,
                            "name": "Hilda Hendrix"
                        },
                        {
                            "comment": "nostrud exercitation labore ullamco anim eiusmod ullamco officia sint nostrud irure fugiat labore minim enim",
                            "date": "2015-10-20T07:37:28 -02:00",
                            "id": 1,
                            "name": "Lynda Mcintyre"
                        },
                        {
                            "comment": "voluptate ea incididunt laborum ullamco eu aliquip duis adipisicing irure incididunt fugiat fugiat laborum reprehenderit",
                            "date": "2015-10-10T03:43:02 -02:00",
                            "id": 2,
                            "name": "Ferguson Noble"
                        }
                    ],
                    "id": "565847085b01d3efd48ec985",
                    "task_name": "RX task created by Warren Benton! EMS-537 task.",
                    "email": "warrenbenton@acrodance.com",
                    "isActive": false
                },
                {
                    "status": "closed",
                    "picture": "http://placehold.it/32x32",
                    "watchers": [
                        {
                            "id": 0,
                            "name": "Santana Bullock"
                        },
                        {
                            "id": 1,
                            "name": "Hewitt Parsons"
                        },
                        {
                            "id": 2,
                            "name": "Rosanna Myers"
                        }
                    ],
                    "name": "Selena Massey",
                    "created": "2014-08-02T10:13:10 -02:00",
                    "company": "OLYMPIX",
                    "tags": [
                        "dolore",
                        "minim",
                        "anim",
                        "cupidatat",
                        "occaecat",
                        "sint",
                        "non"
                    ],
                    "comments": [
                        {
                            "comment": "ut eiusmod duis adipisicing incididunt cupidatat id sunt enim incididunt irure nisi magna pariatur Lorem",
                            "date": "2015-04-09T02:36:56 -02:00",
                            "id": 0,
                            "name": "Angelita Dawson"
                        },
                        {
                            "comment": "excepteur laborum ipsum sunt ad veniam adipisicing consectetur deserunt cillum ea non non dolore adipisicing",
                            "date": "2014-08-08T05:49:31 -02:00",
                            "id": 1,
                            "name": "Bullock Flynn"
                        },
                        {
                            "comment": "non cupidatat mollit non proident fugiat eu duis excepteur esse fugiat sit exercitation sint consequat",
                            "date": "2015-04-21T11:28:03 -02:00",
                            "id": 2,
                            "name": "Baird Walter"
                        }
                    ],
                    "id": "56584708b19e9da99a53661f",
                    "task_name": "RX task created by Selena Massey! EMS-72 task.",
                    "email": "selenamassey@olympix.com",
                    "isActive": false
                },
                {
                    "status": "closed",
                    "picture": "http://placehold.it/32x32",
                    "watchers": [
                        {
                            "id": 0,
                            "name": "Dee Cervantes"
                        },
                        {
                            "id": 1,
                            "name": "Duran Shields"
                        },
                        {
                            "id": 2,
                            "name": "Georgette Walls"
                        }
                    ],
                    "name": "Vance Elliott",
                    "created": "2015-07-23T12:26:29 -02:00",
                    "company": "BOVIS",
                    "tags": [
                        "elit",
                        "excepteur",
                        "elit",
                        "nisi",
                        "et",
                        "ea",
                        "ad"
                    ],
                    "comments": [
                        {
                            "comment": "do exercitation eiusmod sit duis mollit ut elit ad nostrud non cupidatat amet veniam occaecat",
                            "date": "2014-04-30T11:16:46 -02:00",
                            "id": 0,
                            "name": "Myra Bishop"
                        },
                        {
                            "comment": "commodo enim enim aute ullamco elit irure minim nostrud id proident proident nisi cillum deserunt",
                            "date": "2015-07-20T03:21:01 -02:00",
                            "id": 1,
                            "name": "Mcpherson Bradley"
                        },
                        {
                            "comment": "in mollit ea sit cillum sint amet fugiat exercitation qui consequat ipsum in sint cillum",
                            "date": "2014-04-09T02:15:24 -02:00",
                            "id": 2,
                            "name": "Regina Whitfield"
                        }
                    ],
                    "id": "56584708bddc959a76c5bd8d",
                    "task_name": "RX task created by Vance Elliott! EMS-555 task.",
                    "email": "vanceelliott@bovis.com",
                    "isActive": false
                }
            ];

        return {
            json: json
        }
    }


}());