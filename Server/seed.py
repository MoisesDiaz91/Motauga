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


        juiceimage_list= [
            "https://i.imgur.com/VoMZdd8.jpg",
            "https://i.imgur.com/L1dS7Kf.jpg",
            "https://i.imgur.com/Z9FfnaA.jpg",
            "https://i.imgur.com/SSPNHdt.jpg",
            "https://i.imgur.com/Ik5unC0.jpg",
            "https://i.imgur.com/UB9ZLHb.jpg",
            "https://i.imgur.com/A7I1vvT.jpg",
            "https://i.imgur.com/dcv5ZM5.jpg",
            "https://i.imgur.com/yKpieCF.jpg",
            "https://i.imgur.com/yKpieCF.jpg"
        ]
##############################################################################################################################
                    ## FAKE JUICE DATA FOR APP.db  ##JUICE DATABASE RECIEVE FAKE DATA     
#############################################################################################################################
        juice_list = []

        for _ in range(0, 10):
            password_hash=bcrypt.generate_password_hash("123").decode('utf-8')
            
            j = Juice(collab=fake.name(), 
                     name=fake.name(), 
                     flavor=fake.name(),
                     price=randint(20000, 175000),
                     image=choice(juiceimage_list),
                     user_obj = choice(users_list))  
                    
                    
            juice_list.append(j)

        db.session.add_all(juice_list)
        db.session.commit()

#######################################################################################################################
        
        strainimage_list= [
            "https://images.leafly.com/flower-images/defaults/generic/strain-36.png?auto=compress%2Cformat&w=350&dpr=2",
            "https://images.leafly.com/flower-images/defaults/generic/strain-40.png?auto=compress%2Cformat&w=350&dpr=2",
            "https://images.leafly.com/flower-images/defaults/generic/strain-19.png?auto=compress%2Cformat&w=350&dpr=2",
            "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=350&dpr=2",
            "https://images.leafly.com/flower-images/defaults/generic/strain-29.png?auto=compress%2Cformat&w=350&dpr=2",
            "https://images.leafly.com/flower-images/defaults/generic/strain-32.png?auto=compress%2Cformat&w=350&dpr=2",
            "https://leafly-public.imgix.net/strains/photos/X6WMoxxxTSFF7t7tOqgO_MAC.jpg?auto=compress%2Cformat&w=350&dpr=2",
            "https://images.leafly.com/flower-images/defaults/generic/strain-35.png?auto=compress%2Cformat&w=350&dpr=2",
            "https://images.leafly.com/flower-images/defaults/purple/strain-10.png?auto=compress%2Cformat&w=350&dpr=2",
            "https://images.leafly.com/flower-images/runtz-nug-image.jpg?auto=compress%2Cformat&w=350&dpr=2",
            "https://images.leafly.com/flower-images/defaults/dark-green/strain-4.png?auto=compress%2Cformat&w=350&dpr=2" ,
            "https://images.leafly.com/flower-images/defaults/generic/strain-8.png?auto=compress%2Cformat&w=350&dpr=2",
            "https://blackunicornhub.com/cdn/shop/products/platinum_both_sides_w__54673_1024x1024@2x.png?v=1675867403",
            "https://leafly-public.imgix.net/strains/photos/MPWPStPKT0mQMfMPq3fX_Slurricane.jpg?auto=compress%2Cformat&w=350&dpr=2",
            "https://images.leafly.com/flower-images/defaults/generic/strain-19.png?auto=compress%2Cformat&w=350&dpr=2",
            "https://images.leafly.com/flower-images/defaults/purple/strain-17.png?auto=compress%2Cformat&w=350&dpr=2",
            "https://images.leafly.com/flower-images/defaults/purple/strain-18.png?auto=compress%2Cformat&w=350&dpr=2",
            "https://images.leafly.com/flower-images/defaults/generic/strain-39.png?auto=compress%2Cformat&w=350&dpr=2"
        ]

##############################################################################################################################
                    ## FAKE STRAIN DATA FOR APP.db  ##STRAIN DATABASE RECIEVE FAKE DATA     
##############################################################################################################################    
        strain_list = []

        for _ in range(0, 18):
            password_hash=bcrypt.generate_password_hash("123").decode('utf-8')
            
            s = Strain(name=fake.name(),
                     type=fake.name(), 
                     aroma=fake.name(), 
                     taste=fake.name(),
                     thc_level=fake.name(),
                     image=choice(strainimage_list),
                     user_obj = choice(users_list))  
                    
                    
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
        