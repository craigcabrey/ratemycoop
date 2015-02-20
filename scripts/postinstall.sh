#!/bin/bash

if [ ! -f server/datasources.json ]
    then
        cat << EOF > server/datasources.json
{
    "db": {
        "name": "db",
        "connector": "memory"
    }
}
EOF
fi
