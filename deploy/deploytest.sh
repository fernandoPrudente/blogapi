docker run --rm fpmatos/blogapi1 echo "teste de container OK"

if [ ! $? -eq 0 ]; then
 echo "Erro durante o teste de deploy" >> deploy_log.txt 
 exit 125
else
 echo "Deploy de container docker testado e está OK" >> deploy_log.txt
 exit 0
fi;
