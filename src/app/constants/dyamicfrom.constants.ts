import { Iform } from "../interface";

export const dynamicformConfig: Iform = {
    formTitle: "Registration Form",
    saveBtnTitle: 'Register',
    resetBtnTitle: 'Reset',
    formControls: [
        {
            "name": "firstname",
            "label": "Firstname",
            "value": "",
            "placeholder": "firstname",
            "class": "col-md-12",
            "type": "text",
            "validators": [
                {
                    "validatorsName": "required",
                    "required": true,
                    "message": "Firstname is required"


                },
                {

                    "validatorsName": "maxlength",
                    "maxlength": 0  ,
                    "message": "Max Num should be 10"
                }
            ]
        },
        {
            "name": "lastName",
            "label": "lastName",
            "value": "",
            "placeholder": "lastName",
            "class": "col-md-12",
            "type": "text",
            "validators": [
                {
                    "validatorsName": "required",
                    "required": true,
                    "message": "lastName is required"


                },
                {

                    "validatorsName": "minlength",
                    "minlength": 5,
                    "message": "Minimum char is should be 5"
                }
            ]
        },
        {
            "name": "email",
            "label": "email",
            "value": "",
            "placeholder": "rohanpanchal@gmail.com",
            "class": "col-md-12",
            "type": "text",
            "validators": [
                {
                    "validatorsName": "required",
                    "required": true,
                    "message": "email is required"


                }, {

                    "validatorsName": "email",
                    "email": "email",
                    "message": "email should be Valid"
                }
            ]
        },
        {
            "name": "MobileNumber",
            "label": "MobileNumber",
            "value": "",
            "placeholder": "Enter Number",
            "class": "col-md-12",
            "type": "string ",
            "validators": [
                {
                    "validatorsName": "required",
                    "required": true,
                    "message": "MobileNumber is required"


                }, {

                    "validatorsName": "maxlength",
                    "maxlength": 10,
                    "message": "Max Num should be 10"
                }
            ]
        },
        {
            "name": "weight",
            "label": "weight",
            "value": "",
            "placeholder": "Enter weight in kgs",
            "class": "col-md-12",
            "type": "text",
            "validators": [
                {
                    "validatorsName": "required",
                    "required": true,
                    "message": "weight is required"


                }
            ]
        },
        {
            "name": "height",
            "label": "height",
            "value": "",
            "placeholder": "Enter height in cms",
            "class": "col-md-12",
            "type": "text",
            "validators": [
                {
                    "validatorsName": "required",
                    "required": true,
                    "message": "height is required"


                }
            ]
        },
        {
            "name": "gender",
            "label": "gender",
            "value": "",
            "placeholder": "",
            "radioOptions": [
                "Male",
                "Female"
            ],
            "class": "col-md-4",
            "type": "radio",
            "validators": [
                {
                    "validatorsName": "required",
                    "required": true,
                    "message": "gender is required"


                }
            ]
        },
        {
            "name": "trainer",
            "label": " Require trainer",
            "value": "",
            "placeholder": "",
            "radioOptions": [
                "Yes",
                "No"
            ],
            "class": "col-md-4",
            "type": "radio",
            "validators": [
                {
                    "validatorsName": "required",
                    "required": true,
                    "message": "selection is required"


                }
            ]
        },
        {
            "name": "package",
            "label": " Require Package",
            "value": "",
            "placeholder": "",
            "options": [
                {
                    id: 1,
                    "value": "Monthly"
                },
                {
                    id: 2,
                    "value": "Quaterly"
                },
                {
                    id: 3,
                    "value": "Yearly"
                }
            ],
            "class": "col-md-12",
            "type": "select",
            "validators": [
                {
                    "validatorsName": "required",
                    "required": true,
                    "message": "selection is required"


                }
            ]
        },
        {
            "name": "motivation",
            "label": " what is imp to you",
            "value": "",
            "placeholder": "",
            "options": [
                {
                    id: 1,
                    "value": "Get Fit"
                },
                {
                    id: 2,
                    "value": "Gain Muscle"
                },
                {
                    id: 3,
                    "value": "Weight Loss"
                }
            ],
            "class": "col-md-12",
            "type": "select",
            "validators": [
                {
                    "validatorsName": "required",
                    "required": true,
                    "message": "selection is required"


                }
            ]
        },
        {
            "name": "entryDate",
            "label": "EntryDate",
            "value": "",
            "placeholder": "",
            "class": "col-md-12",
            "type": "date",
            "validators": [
                {
                    "validatorsName": "required",
                    "required": true,
                    "message": "entryDate is required"


                }
            ]
        },

    ]

}