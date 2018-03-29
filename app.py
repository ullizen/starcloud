from chalice import Chalice
from chalicelib import request_handler
from chalice import CORSConfig

app = Chalice(app_name='StarCloud')
app.debug = True

cors_config = CORSConfig(
    allow_origin = '*',
    allow_headers=['X-Special-Header'],
    max_age=600,
    expose_headers=['X-Special-Header'],
    allow_credentials=True
)

@app.route('/starcloud', methods=['GET'], cors=cors_config)
def get_items():
    return request_handler.handle_get_all()

@app.route('/starcloud', methods=['POST'], content_types=['application/json'], cors=cors_config)
def post_item():
    data = app.current_request.json_body
	
    if data is None:
        return "RAISE SOME ERROR"

    return request_handler.handle_post_item(data)