
from flask import Flask, request, make_response, jsonify

from config import app, db
from model import User, Juice, Strain, ShoppingCart, FavoriteCart


################################################################################
######################### CURL COMMANDS TO TEST ROUTES #########################
################################################################################


# CURL for GET Request to Home Route (/)
# `curl -i http://127.0.0.1:5000/`

# CURL for GET Request to Not-Home Route (/stuff)
# `curl -i http://127.0.0.1:5000/stuff`

# CURL for GET Request to Single Item in Not-Home Route (/stuff/<int:id>)
# `curl -i http://127.0.0.1:5000/stuff/<int:id>`

# CURL for POST Request to Single Item in Not-Home Route (/stuff)
# `curl -i -H "Content-Type: application/json" -X POST -d '{"key_1": "value_1", "key_2": "value_2", ..., "key_final": "value_final"}' http://127.0.0.1:5000/stuff`

# CURL for PATCH Request to Single Item (/stuff/<int:id>)
# `curl -i -H "Content-Type: application/json" -X PATCH -d '{"key_of_thing_to_change":"new_value"}' http://127.0.0.1:5000/stuff/<int:id>`

# CURL for DELETE Request to Single Item (/stuff/<int:id>)
# `curl -H "Content-Type: application/json" -X DELETE http://127.0.0.1:5000/stuff/<int:id>`



################################################################################
################################################################################
################################################################################


## ROUTES
@app.route('/')
def index():
    return {"Moises": "Kash"}

##############################################    
# USERS
    
@app.get('/users') #Working Route on POSTMAN#
def get_all_users():
    users = User.query.all()
    users_to_dict = [ u.to_dict() for u in users ]
    return users_to_dict, 200

@app.get('/users/<int:id>') #Working Route on POSTMAN#
def get_user_by_id(id):
    found_user = User.query.filter(User.id == id).first ()
    if found_user:
        return found_user.to_dict(), 200
    else:
        return{ "message": "Not Found"}, 404
    
@app.patch("/users/<int:id>") #Working Route on POSTMAN#
def patch_users(id):
    data = request.get_json()
    user = User.query.filter(User.id == id).first()
    if not user:
        make_response(jsonify({"error": "no such user"}), 404)
    try:
        for key in data:
            setattr(user, key, data[key])
        db.session.add(user)
        db.session.commit()
        return make_response(jsonify(user.to_dict()), 201)
    except:
        return make_response(jsonify({"error": "could not update user"}), 405)
    
@app.delete("/users/<int:id>") #Working Route on POSTMAN#
def delete_user(id):
    found_user = User.query.filter(User.id == id).first ()
    if found_user:
        db.session.delete(found_user)
        db.session.commit()
        return {}, 204
    else:
        return{ "message": "Not Found"}, 404
    
############################################################
# JUICES
    
@app.get('/juices') #Working Route on POSTMAN#
def get_all_juices():
    juice = Juice.query.all()
    juice_to_dict = [ j.to_dict() for j in juice ]
    return juice_to_dict, 200

@app.get('/juices/<int:id>') #Working Route on POSTMAN#
def get_juice_by_id(id):
    found_juice = Juice.query.filter(Juice.id == id).first ()
    if found_juice:
        return found_juice.to_dict(), 200
    else:
        return{ "message": "Not Found"}, 404

@app.patch("/juices/<int:id>") #Working Route on POSTMAN#
def patch_juices(id):
    data = request.get_json()
    juice = Juice.query.filter(Juice.id == id).first()
    if not juice:
        make_response(jsonify({"error": "no such juice"}), 404)
    try:
        for key in data:
            setattr(juice, key, data[key])
        db.session.add(juice)
        db.session.commit()
        return make_response(jsonify(juice.to_dict()), 201)
    except:
        return make_response(jsonify({"error": "could not update juice"}), 405)
    
@app.delete("/juices/<int:id>") #Working Route on POSTMAN#
def delete_juice(id):
    found_juice = Juice.query.filter(Juice.id == id).first ()
    if found_juice:
        db.session.delete(found_juice)
        db.session.commit()
        return {}, 204
    else:
        return{ "message": "Not Found"}, 404
##############################################
#STRAIN

@app.get('/strains') #Working Route on POSTMAN#
def get_all_strains():
    strain = Strain.query.all()
    strain_to_dict = [ s.to_dict() for s in strain ]
    return strain_to_dict, 200 

@app.get('/strains/<int:id>') #Working Route on POSTMAN#
def get_strain_by_id(id):
    found_strain = Strain.query.filter(Strain.id == id).first ()
    if found_strain:
        return found_strain.to_dict(), 200
    else:
        return{ "message": "Not Found"}, 404
    
@app.patch("/strains/<int:id>") #Working Route on POSTMAN#
def patch_strain(id):
    data = request.get_json()
    strain = Strain.query.filter(Strain.id == id).first()
    if not strain:
        make_response(jsonify({"error": "no such strain"}), 404)
    try:
        for key in data:
            setattr(strain, key, data[key])
        db.session.add(strain)
        db.session.commit()
        return make_response(jsonify(strain.to_dict()), 201)
    except:
        return make_response(jsonify({"error": "could not update strain"}), 405)


@app.delete("/strains/<int:id>") #Working Route on POSTMAN#
def delete_strain(id):
    found_strain = Strain.query.filter(Strain.id == id).first ()
    if found_strain:
        db.session.delete(found_strain)
        db.session.commit()
        return {}, 204
    else:
        return{ "message": "Not Found"}, 404
##############################################

# SHOPPING CART
    
@app.get('/shoppingcarts') #Working Route on POSTMAN#
def get_all_shopping_carts():
    shoppingcarts = ShoppingCart.query.all()
    shoppingcarts_to_dict = [ s.to_dict() for s in shoppingcarts ]
    return shoppingcarts_to_dict, 200

@app.get('/shoppingcarts/<int:id>') #Working Route on POSTMAN#
def get_shoppingcart_by_id(id):
    found_shoppingcart = ShoppingCart.query.filter(ShoppingCart.id == id).first ()
    if found_shoppingcart:
        return found_shoppingcart.to_dict(), 200
    else:
        return{ "message": "Not Found"}, 218
    
@app.post("/shoppingcarts")
def create_shoppingcart():
    data = request.json
    try:
        new_shoppingcart = ShoppingCart(
            user_id = data.get("user_id"),
            juice_id = data.get("juice_id")
            
        )
        db.session.add(new_shoppingcart)
        db.session.commit()

        return new_shoppingcart.to_dict(), 201
    
    except Exception as e:
        return {"error": f"{e}"}, 404
    
@app.patch("/shoppingcarts/<int:id>") #Working Route on POSTMAN#
def patch_shoppingcarts(id):
    data = request.get_json()
    shoppingcart = ShoppingCart.query.filter(ShoppingCart.id == id).first()
    if not shoppingcart:
        make_response(jsonify({"error": "no such favorite"}), 404)
    try:
        for key in data:
            setattr(shoppingcart, key, data[key])
        db.session.add(shoppingcart)
        db.session.commit()
        return make_response(jsonify(shoppingcart.to_dict()), 201)
    except:
        return make_response(jsonify({"error": "could not update cart"}), 405)
    
@app.delete("/shoppingcarts/<int:id>") #Working Route on POSTMAN#
def delete_shoppingcart(id):
    found_shoppingcart = ShoppingCart.query.filter(ShoppingCart.id == id).first ()
    if found_shoppingcart:
        db.session.delete(found_shoppingcart)
        db.session.commit()
        return {}, 204
    else:
        return{ "message": "Not Found"}, 404
    
##############################################

# Favorite CART
    
@app.get('/favoritecart') #Working Route on POSTMAN#
def get_all_favorite_cars():
    favoritecart = FavoriteCart.query.all()
    favoritecart_to_dict = [ f.to_dict() for f in favoritecart ]
    return favoritecart_to_dict, 200

@app.get('/favoritecart/<int:id>') #Working Route on POSTMAN#
def get_favoritecart_by_id(id):
    found_favoritecart = FavoriteCart.query.filter(FavoriteCart.id == id).first ()
    if found_favoritecart:
        return found_favoritecart.to_dict(), 200
    else:
        return{ "message": "Not Found"}, 218
    
@app.post("/favoritecart")
def create_favoritecart():
    data = request.json
    try:
        new_favoritecart = FavoriteCart(
            user_id = data.get("user_id"),
            juice_id = data.get("juice_id")
            
        )
        db.session.add(new_favoritecart)
        db.session.commit()

        return new_favoritecart.to_dict(), 201
    
    except Exception as e:
        return {"error": f"{e}"}, 404
    
@app.patch("/favoritecart/<int:id>") #Working Route on POSTMAN#
def patch_favoritecart(id):
    data = request.get_json()
    favoritecart = FavoriteCart.query.filter(FavoriteCart.id == id).first()
    if not favoritecart:
        make_response(jsonify({"error": "no such favorite"}), 404)
    try:
        for key in data:
            setattr(favoritecart, key, data[key])
        db.session.add(favoritecart)
        db.session.commit()
        return make_response(jsonify(favoritecart.to_dict()), 201)
    except:
        return make_response(jsonify({"error": "could not update favorite"}), 405)
    
@app.delete("/favoritecart/<int:id>") #Working Route on POSTMAN#
def delete_favoritecart(id):
    found_favoritecart = FavoriteCart.query.filter(FavoriteCart.id == id).first ()
    if found_favoritecart:
        db.session.delete(found_favoritecart)
        db.session.commit()
        return {}, 204
    else:
        return{ "message": "Not Found"}, 404
    
if __name__ == '__main__':
    app.run(port=5555, debug=True)