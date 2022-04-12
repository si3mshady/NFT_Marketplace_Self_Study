#!/bin/bash
yarn run build && \
docker build . -t si3mshady/blockchain_app:1 && \
docker push si3mshady/blockchain_app:

