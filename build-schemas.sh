#!/bin/bash
TARGETDIR=dist/schemas
BASECOMMAND="yarn typescript-json-schema --noExtraProps --required --strictNullChecks --aliasRefs tsconfig.json"

types=(Adventure Character Class Faction Race Spell SpellList)

mkdir -p ${TARGETDIR}
for t in ${types[@]}; do
  ${BASECOMMAND} Raw${t}Asset > "${TARGETDIR}/${t}.schema.json"
done
