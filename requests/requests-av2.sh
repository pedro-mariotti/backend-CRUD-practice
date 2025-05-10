# Rota para trazer todas as postagens do usuário logado
curl --request GET \--url http://localhost:3000/protected/blog \--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWY4ODMzZmNlY2I0MzA1NzNlMjM1MyIsImlhdCI6MTc0Njg5NzAwNSwiZXhwIjoxNzQ2OTgzNDA1fQ.hmMNtManXs_3NwGfUMmhdxuYcFrqFaXLYm6A2uxlFJg'

# Rota para trazer somente uma postagem do usuário logado por postID
curl --request GET \--url http://localhost:3000/protected/blog/1 \--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWY4ODMzZmNlY2I0MzA1NzNlMjM1MyIsImlhdCI6MTc0Njg5NzAwNSwiZXhwIjoxNzQ2OTgzNDA1fQ.hmMNtManXs_3NwGfUMmhdxuYcFrqFaXLYm6A2uxlFJg'

curl --request POST \--url https://backend-crud-practice-theta.vercel.app/protected/blog \--header 'Content-Type: application/json' \--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWY4ODMzZmNlY2I0MzA1NzNlMjM1MyIsImlhdCI6MTc0Njg5NzAwNSwiZXhwIjoxNzQ2OTgzNDA1fQ.hmMNtManXs_3NwGfUMmhdxuYcFrqFaXLYm6A2uxlFJg' \--data '{"title":"blog-teste delete 3","content":"isso e um teste"}'

curl --request DELETE \--url https://backend-crud-practice-theta.vercel.app/protected/blog \--header 'Content-Type: application/json' \--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWY4ODMzZmNlY2I0MzA1NzNlMjM1MyIsImlhdCI6MTc0Njg5NzAwNSwiZXhwIjoxNzQ2OTgzNDA1fQ.hmMNtManXs_3NwGfUMmhdxuYcFrqFaXLYm6A2uxlFJg' \--data '{"title":"blog-teste","content":"isso e um teste"}'
