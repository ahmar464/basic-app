from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def greeting_view(request):
    name = request.data.get('name', 'there')
    message = f"Hello, {name}!."
    return Response({"message": message})
