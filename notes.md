# How to get the schema?

## Mpociot\LaravelTestFactoryHelper\Console\GenerateCommand::getPropertiesFromTable
Very good - but requires migration 🙂

## Use dump file
Good 😋but not all projects will have dump files

## SQL describe table
Kind of nice 😏Requires drivers for different databases?

## Run migrations in a sqlite
Smart 😏 But will not always work

## Parse migrations
Hard but perhaps doable in certain situations 🤤

## Read the Model::first() of each table
Kind of ugly and unreliable 🤨Tables will be empty at times.




Strategy::fromDumpFile()
Strategy::fromSQLDescribe()
Strategy::fromParsedMigrations()