# Standard library imports
from random import randint, choice

# Remote library imports
from faker import Faker
from flask_bcrypt import Bcrypt

# Local imports
from app import app
from model import db, User, Juice, Strain, ShoppingCart, FavoriteCart


state_list = [
            "AL",
            "AK",
            "AZ",
            "AR",
            "CA",
            "CO",
            "CT",
            "DE",
            "DC",
            "FL",
            "GA",
            "HI",
            "ID",
            "IL",
            "IN",
            "IA",
            "KS",
            "KY",
            "LA",
            "ME",
            "MT",
            "NE",
            "NV",
            "NH",
            "NJ",
            "NM",
            "NY",
            "NC",
            "ND",
            "OH",
            "OK",
            "OR",
            "PA",
            "PR",
            "RI",
            "SC",
            "SD",
            "TN",
            "TX",
            "UT",
            "VT",
            "VI",
            "VA",
            "WA",
            "WV",
            "WI",
            "WY",
        ]

## USERS
if __name__ == "__main__":
    fake = Faker()
    with app.app_context():
        bcrypt = Bcrypt(app)

        print("Starting seed...")

        User.query.delete()
        Juice.query.delete()
        ShoppingCart.query.delete()
        Strain.query.delete()
        FavoriteCart.query.delete()

##############################################################################################################################
                    ## FAKE USER DATA FOR APP.db  ##USER MODEL RECIEVE FAKE DATA     
##############################################################################################################################        
        users_list = []

        for _ in range(0, 5):
            password_hash=bcrypt.generate_password_hash("123").decode('utf-8')
            
            u = User(first_name=fake.name(), 
                     last_name=fake.name(), 
                     city=fake.company(), 
                     state=choice(state_list).capitalize(), 
                     username=fake.company(), 
                     password=password_hash,
                     phone_number = fake.phone_number())  
                    
                    
            users_list.append(u)

        db.session.add_all(users_list)
        db.session.commit()
        #######################################################################################################################


##############################################################################################################################
                    ## FAKE JUICE DATA FOR APP.db  ##JUICE DATABASE RECIEVE FAKE DATA     
#############################################################################################################################
        juice_list = []

        for _ in range(0, 5):
            password_hash=bcrypt.generate_password_hash("123").decode('utf-8')
            
            j = Juice(collab=fake.name(), 
                     name=fake.name(), 
                     flavor=fake.name(),)  
                    
                    
            juice_list.append(j)

        db.session.add_all(juice_list)
        db.session.commit()

#######################################################################################################################
        
##############################################################################################################################
                    ## FAKE STRAIN DATA FOR APP.db  ##STRAIN DATABASE RECIEVE FAKE DATA     
##############################################################################################################################    
        strain_list = []

        for _ in range(0, 5):
            password_hash=bcrypt.generate_password_hash("123").decode('utf-8')
            
            s = Strain(type=fake.name(), 
                     aroma=fake.name(), 
                     taste=fake.name(),
                     thc_level=fake.name())  
                    
                    
            strain_list.append(s)

        db.session.add_all(strain_list)
        db.session.commit()
#######################################################################################################################
        
##############################################################################################################################
                    ## FAKE SHOPPING-CART DATA FOR APP.db  ##SHOPPING-CART DATABASE RECIEVE FAKE DATA     
##############################################################################################################################
        shopping_cart_list = []

        for _ in range(0, 10):
           s = ShoppingCart(
                     user_id=choice(users_list).id,
                     juice_id=choice(juice_list).id,
                     strain_id=choice(strain_list).id)

           shopping_cart_list.append(s)

        db.session.add_all(shopping_cart_list)
        db.session.commit()


#######################################################################################################################
        
##############################################################################################################################
                    ## FAKE FAVORITE-CART DATA FOR APP.db  ##SHOPPING-CART DATABASE RECIEVE FAKE DATA     
##############################################################################################################################
        favorite_cart_list = []

        for _ in range(0, 5):
             s = FavoriteCart(
                     user_id=choice(users_list).id,
                     juice_id=choice(juice_list).id,
                     strain_id=choice(strain_list).id)

             favorite_cart_list.append(s)

        db.session.add_all(favorite_cart_list)
        db.session.commit()
        