cd ../../cloud

cat ../package.json | jq "[.]|map({dependencies})[0]" > ./package.json
# cp -f ../package.json ./package.json

b4a configure accountkey
b4a deploy Blockchain-Battles