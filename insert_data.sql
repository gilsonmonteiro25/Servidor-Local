INSERT INTO tbl_utilizadores (
id,
nome,
 numero_identificacao,
 data_nascimento,
 email,
 telefone,
 pais,
 localidade,
 `password`,
 enabled,
 created_at,
 updated_at
 )VALUES(
 "a94a6e82-78b4-4231-82d0-91d12869fa23",
 "Gilson Monteiro",
 "moo1k",
 "1999-11-26",
 "gilsonpatasmonteiro@gmail.com",
 "5872820",
 "Cabo Verde",
 "Tarrafal",
 "$2a$12$rQxY8q4mUem0PursxuRA9.Dejwa3xi4qTDvMPtnMIoM13R.yA.Umy",
 true,
 NOW(),
 NOW()
 );
 
 INSERT INTO tbl_orcamento 
 VALUES(
 NULL,
 200,
"a94a6e82-78b4-4231-82d0-91d12869fa23",
 true,
 NOW(),
 NOW()
 );
 
 INSERT INTO tbl_servicos
 VALUES (
 NULL,
  "carpintaria",
  "conserto de portas, janelas, mesas e outros mobiliarios e utensileos de madeira",
  "caseiro",
  true,
  NOW(),
  NOW()
 );
 
 
 INSERT INTO tbl_prestadores
 VALUE (
 "a94a6e82-78b4-4231-82d0-91d12869fa23",
 987654321,
 "Piloto",
  0.2,
 "250",
 0.1,
 true,
 true,
 NOW(),
 NOW()
 )
 