#!/bin/bash

# Faz deploy em Docker Image

# AUTHOR: Fernando Matos

echo "$(date) - iniciando deploy docker cloud" >> deploy_log.txt

echo "$dockerpass" | docker login -u fpmatos --password-stdin

docker build -t fpmatos/blogapi .

docker push fpmatos/blogapi

if [ ! $? -eq 0 ]; then
  echo "erro ao fazer deploy" >> deploy_log.txt
  exit 1
else 
  echo "deploy concluído" >> deploy_log.txt
  exit 0
fi;
