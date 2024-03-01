#!/bin/bash
TARGETDIR=dist/schemas
BASECOMMAND="yarn typescript-json-schema --noExtraProps --required --strictNullChecks tsconfig.json"

types=(Adventure Character Class Faction Race)

mkdir -p ${TARGETDIR}
for t in ${types[@]}; do
  ${BASECOMMAND} Raw${t}Asset > "${TARGETDIR}/${t}.schema.json"
done
