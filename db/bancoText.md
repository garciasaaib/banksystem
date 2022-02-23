create table sucursales(
	id_sucursal serial primary key,
	nombre varchar(50),
	direccion varchar(50),
	email varchar(30),
	CEO varchar(50),
	descripcion varchar(100),
	seguridad varchar(50)
);

create table comisiones(
	id_comision serial primary key,
	fecha date,
	nombre varchar(10),
	cantidad float
);

create table puestos(
	id_puesto serial primary key,
	nombre varchar(20)
);

create table areas(
	id_area serial primary key,
	nombre varchar(20)
);

create table ejecutivos(
	id_ejecutivo serial primary key,
	nombre varchar(50),
	apellido varchar(50),
	clave int,
	contraseña varchar(100),
	status varchar(6),
	id_sucursal int,
	id_puesto int,
	id_area int,
	foreign key(id_sucursal) references sucursales (id_sucursal),
	foreign key(id_puesto) references puestos(id_puesto),
	foreign key(id_area) references areas(id_area)
);

create table clientes(
	id_cliente serial primary key,
	nombre varchar(50),
	apellido varchar(50),
	genero char,
	calle varchar(50),
	numero_ext int,
	colonia varchar(25),
	cp int,
	ciudad varchar(30),
	municipio varchar(50),
	estado varchar(30),
	telefono_casa bigint,
	telefono_cel bigint,
	curp varchar(18),
	rfc varchar(13),
	no_ine varchar(20),
	correo varchar(50),
	activo boolean,
	id_sucursal int,
	id_ejecutivo int,
	foreign key(id_sucursal) references sucursales (id_sucursal),
	foreign key(id_ejecutivo) references ejecutivos(id_ejecutivo)
);

create table cuentas (
	id_cuenta serial primary key,
	tipo char,
	fecha_creacion date,
	estado boolean,
	monto float,
	limite_credito float,
	id_cliente int,
	id_ejecutivo int,
	foreign key(id_cliente) references clientes(id_cliente),
	foreign key(id_ejecutivo) references ejecutivos(id_ejecutivo)
);


create table tarjetas (
	id_numero_tarjeta varchar(16) primary key,
	nip int,
	fecha_vencimiento date,
	status boolean,
	id_cuenta int,
	id_ejecutivo int,
	foreign key(id_cuenta) references cuentas (id_cuenta),
	foreign key(id_ejecutivo) references ejecutivos(id_ejecutivo)
);

create table beneficiarios (
	id_beneficiario serial primary key,
	parentesco varchar(20),
	porcentaje int,
	fecha_nacimiento date,
	telefono bigint,
	correo varchar(100),
	id_cuenta int,
	foreign key(id_cuenta) references cuentas (id_cuenta)
);

create table creditos(
	id_credito serial primary key,
	fecha_solicitud date,
	fecha_aprobacion date,
	monto_solicitado float,
	monto_otorgado float,
	status boolean,
	plazo_deuda date,
	intereses float,
	comision float,
	id_cliente int,
	id_ejecutivo int,
	foreign key(id_cliente) references clientes(id_cliente),
	foreign key(id_ejecutivo) references ejecutivos(id_ejecutivo)
);

create table avales (
	id_aval serial primary key,
	nombre varchar(50),
	apellidos varchar(50),
	direccion varchar(50),
	telefono bigint,
	id_credito int,
	foreign key(id_credito) references creditos(id_credito)
);

create table propiedades(
	id_propiedad serial primary key,
	archivo bytea,
	valor float,
	id_aval int,

	foreign key(id_aval) references avales(id_aval)
);

create table transacciones (
	id_transaccion serial primary key,
	monto_inicial float,
	monto_final float,
	fecha date,
	tipo varchar(10),
	cantidad float,
	id_cuenta int,
	id_ejecutivo int,
	id_comision int,
	foreign key(id_cuenta) references cuentas(id_cuenta),
	foreign key(id_ejecutivo) references ejecutivos(id_ejecutivo),
	foreign key(id_comision) references comisiones(id_comision)
);

create table reposiciones (
	id_reposicion serial primary key,
	fecha date,
	id_numero_tarjeta varchar(16),
	id_transaccion int,
	id_ejecutivo int,
	foreign key(id_numero_tarjeta) references tarjetas(id_numero_tarjeta),
	foreign key(id_transaccion) references transacciones(id_transaccion),
	foreign key(id_ejecutivo) references ejecutivos(id_ejecutivo)
);

create table denominaciones(
	id_denominacion serial primary key,
	tipo varchar(10),
	nombre varchar(20)
);

create table cajas(
	id_caja serial primary key,
	cantidad int,
	id_transaccion int,
	id_denominacion int,
	foreign key(id_transaccion) references transacciones(id_transaccion),
	foreign key(id_denominacion) references denominaciones(id_denominacion)

);