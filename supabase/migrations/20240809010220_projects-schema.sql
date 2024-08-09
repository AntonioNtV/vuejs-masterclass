DROP table if exists projects;

DROP type if exists current_status;

CREATE type current_status AS enum ('in-progress', 'completed');

CREATE table
    projects (
    id bigint primary key generated always as identity not null,
    created_at timestamp default now() not null,
    name text not null,
    slug text unique not null,
    status current_status default 'in-progress' not null,
    collaborators text array default array[]::varchar[] not null
);
