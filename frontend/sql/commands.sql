
CREATE TABLE user {
    id int, 
    user_name VARCHAR(255), 
    email VARCHAR(255),
    user_password password,  
}
CREATE TABLE project {
    id int, 
    user_id int, 
    done boolean, 
    

}

CREATE TABLE feature {

}
