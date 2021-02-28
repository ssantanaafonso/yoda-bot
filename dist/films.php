<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://inbenta-graphql-swapi-prod.herokuapp.com/api',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{"query":"{\\r\\n    allFilms {\\r\\n        films {\\r\\n            title\\r\\n        }\\r\\n    }\\r\\n}","variables":{}}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
