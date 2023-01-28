"use strict";

//Class Contact
class Contact {
    /**
     * Constructor
     *
     * @param fullName
     * @param contactNumber
     * @param emailAddress
     */
    constructor(fullName, contactNumber, emailAddress) {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }

    /**
     * Setting fullName value
     */
    set FullName(fullName){
        this.m_fullName = fullName;

    }

    /**
     * Getting fullName value
     */
    get FullName(){
        return this.m_fullName;
    }

    /**
     * Setting contactNumber value
     */
    set ContactNumber(contactNumber){
        this.m_contactNumber = contactNumber;

    }

    /**
     * Getting contactnumber value
     */
    get ContactNumber(){
        return this.m_contactNumber;
    }

    /**
     * Setting EmailAddress value
     */
    set EmailAddress(emailAddress){
        this.m_emailAddress = emailAddress;
    }

    /**
     * Getting emailAddress value
     */
    get EmailAddress(){
        return this.m_emailAddress;
    }

    /**
     * Setting short message value
     */
    set ShortMessage(shortMessage){
        this.m_shortMessage = shortMessage;
    }

    /**
     * Getting short message value
     */
    get ShortMessage(){
        return this.m_shortMessage;
    }

    toString(){
        return 'Full Name: ${this.FullName}\n Contact Number: $(this.ContactNumber}\n Email Address: ${this.EmailAddress}\n Message: $(this.ShortMessage}';
    }

    serialize(){
        if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== ""){
            return '${this.FullName}, ${this.ContactNumber}, ${this.EmailAddress}, ${this.ShortMessage}';
        }

        console.error("One or more of the properties of the Contact object are missing or invalid");

    }

    deserialize(data){
        let propertyArray = data.split(",");
        this.FullName = propertyArray[0];
        this.ContactNumber = propertyArray[1];
        this.EmailAddress = propertyArray[2];
        this.ShortMessage = propertyArray[3];

    }

}