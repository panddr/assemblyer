namespace :db do
    desc 'Pull production db to development'
    task :pull => [:dump, :restore]
  
    task :dump do
      dumpfile = "#{Rails.root}/tmp/latest.dump"
      puts('PG_DUMP on production database...')
      db_conf = Rails.application.config.database_configuration
      production = db_conf['production']
      system("ssh deploy@213.139.210.35 'pg_dump -U deploy #{production['database']}  #{db_conf['host']}' > #{dumpfile}")

      puts('Done!')
    end
  
    task :restore do
      dev = Rails.application.config.database_configuration['development']
      dumpfile = "#{Rails.root}/tmp/latest.dump"
      puts('PG_RESTORE on development database...')
      system('psql -U postgres assemblyer_development -f tmp/latest.dump')
      system("pg_restore --verbose --clean --no-acl --no-owner -h 127.0.0.1 -U #{dev['username']} -d #{dev['database']} #{dumpfile}")

      puts('Done!')
    end
  end
  