from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates


from config import db

###### USER ######
class User(db.Model, SerializerMixin):

    __tablename__ = "users_table"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String,nullable = False)
    username = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)
    phone_number = db.Column(db.String, nullable=False)
    admin = db.Column(db.Boolean, nullable=True)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    password_hash = db.Column(db.String,)
    
    ## REALTIONSHIP ##
    
    # User to Juice#
    owned_juice = db.relationship("Juice", back_populates="user_obj", cascade="all, delete-orphan")

    #User to Strain#
    owned_strain = db.relationship("Strain", back_populates="user_obj", cascade="all, delete-orphan")

    # User to Shopping Cart#
    shopping_cart = db.relationship("ShoppingCart", back_populates="user_obj", cascade="all, delete-orphan")

    #User to Favorite Cart#
    favorite_cart = db.relationship("FavoriteCart", back_populates="user_obj", cascade="all, delete-orphan")
    
    serialize_rules = ("-owned_juice", "-owned_strain", "-shopping_cart", "-favorite_cart",)
    
    @validates('first_name')
    def validate_first_name(self, key, val):
        if 2 <= len(val) <= 35 and val.capitalize():
            return val
        else:
            raise ValueError("Name must be between 2-35 characters and case sensititve")
        
    @validates('state')
    def validate_state(self, key, val):
        if 1 <= len(val) <= 2 and val.capitalize():
            return val
        else:
            raise ValueError("State must be 2 characters and case sensititve")
        



######JUICE########
class Juice(db.Model, SerializerMixin):

    __tablename__ = "juice_table"

    id = db.Column(db.Integer, primary_key=True)
    collab = db.Column(db.String, nullable = False)
    name = db.Column(db.String, nullable = False)
    flavor = db.Column(db.String, nullable=False)
    price = db.Column(db.Integer, nullable = False)
    
    ## FOREIGN KEY ##
    owner_id = db.Column(db.Integer, db.ForeignKey("users_table.id"))
    
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now(), nullable=True)

    ## REALTIONSHIP ##
    
    # Juice to User#
    user_obj = db.relationship("User", back_populates="owned_juice")

    # Juice to Shopping Cart #
    shopping_cart = db.relationship("ShoppingCart", back_populates="juice_obj", cascade="all, delete-orphan")

    #Juice to Favorite Cart#
    favorite_cart = db.relationship("FavoriteCart", back_populates="juice_obj", cascade="all, delete-orphan")
    
   # Rules #
    serialize_rules = ("-user_obj", "-shopping_cart.juice_obj", "-favorite_cart",)
    
    # association_proxy#

 
    ###### STRAIN ######
class Strain(db.Model, SerializerMixin):

    __tablename__= "strain_table"

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String, nullable = False)
    aroma = db.Column(db.String, nullable = False)
    taste  = db.Column(db.String, nullable = False)
    thc_level = db.Column(db.String, nullable = False)
    price = db.Column(db.Integer, nullable = False)
    name = db.Column(db.String, nullable=True)

    ## FOREIGN KEY ##
    owner_id = db.Column(db.Integer, db.ForeignKey("users_table.id"))
    
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now(), nullable=True)

    ## REALTIONSHIP ##

     #Strain to User#
    user_obj = db.relationship("User", back_populates="owned_strain")

    #Strain to Shopping Cart#
    shopping_cart = db.relationship("ShoppingCart", back_populates="strain_obj", cascade="all, delete-orphan")

    #Strain to FavoriteCart#
    favorite_cart = db.relationship("FavoriteCart", back_populates="strain_obj", cascade="all, delete-orphan")

    # Rules #
    serialize_rules = ("-user_obj", "-shopping_cart.strain_obj", "-favorite_cart",)
   
  



   
    ###### SHOPPING CART ######
class ShoppingCart (db.Model, SerializerMixin):

    __tablename__= "shopping_cart_table"

    id = db.Column(db.Integer, primary_key=True)

    ## FOREGIN KEY##
    user_id = db.Column(db.Integer, db.ForeignKey("users_table.id"), nullable=False)
    juice_id = db.Column(db.Integer, db.ForeignKey("juice_table.id"), nullable=False)
    strain_id = db.Column(db.Integer, db.ForeignKey("strain_table.id"), nullable=False)
    
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

     ## REALTIONSHIP ##
    
    #Shopping Cart to User#
    user_obj = db.relationship("User", back_populates="shopping_cart")

    #Shopping Cart to Juice#
    juice_obj = db.relationship("Juice", back_populates="shopping_cart")

    #Shopping Cart to Strain
    strain_obj = db.relationship("Strain", back_populates="shopping_cart")

    # Rules#
    serialize_rules = ("-user_obj", "-juice_obj.shopping_cart", "-strain_obj.shopping_cart",)


###### FAVORITE PRODUCT ######
class FavoriteCart(db.Model, SerializerMixin): 
    __tablename__ = "favorite_cart_table"

    id = db.Column(db.Integer, primary_key=True)

     ## FOREGIN KEY##
    user_id = db.Column(db.Integer, db.ForeignKey("users_table.id"), nullable=False)
    juice_id = db.Column(db.Integer, db.ForeignKey("juice_table.id"), nullable=False)
    strain_id = db.Column(db.Integer, db.ForeignKey("strain_table.id"), nullable=False)

    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())  

    ## REALTIONSHIP ##

    #Favorite cart to User#
    user_obj = db.relationship("User", back_populates="favorite_cart")

    #Favorite cart to Juice#
    juice_obj = db.relationship("Juice", back_populates="favorite_cart")

    #Favorite cart to Strain#
    strain_obj = db.relationship("Strain", back_populates="favorite_cart")

    # Rules #
    serialize_rules = ("-user_obj", "-juice_obj.favorite_cart", "-strain_obj.favorite_cart",)
 

