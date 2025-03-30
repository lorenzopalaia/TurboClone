#!/bin/bash
set -a # Attiva l'esportazione automatica
[ -f .env.local ] && source .env.local
set +a # Disattiva l'esportazione automatica

# Ora le variabili d'ambiente sono accessibili nello script
echo "NEXT_PUBLIC_PRODUCTION_URL is $NEXT_PUBLIC_PRODUCTION_URL"
