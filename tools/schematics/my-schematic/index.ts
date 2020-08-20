import { chain, externalSchematic, Rule, Tree, SchematicContext, url, apply, template, mergeWith, move, noop, filter, MergeStrategy, Source } from '@angular-devkit/schematics';
import { strings } from "@angular-devkit/core";
import * as path from 'path';

// https://medium.com/rocket-fuel/angular-schematics-simple-schematic-76be2aa72850

function generateFilesFromTemplates(options: any) : Rule {
  return (tree: Tree, _context: SchematicContext) => {

    const sourceTemplates: Source = url(path.join(
      __dirname,
      './templates'
    ));

    const destination: string = path.join(
      'apps',
      options.project,
      'src',
      'app',
      options.name
    );

    const sourceParametrizedTemplates = apply(sourceTemplates, [
      options.spec ? noop() : filter(path => !path.endsWith('.spec.ts')),
      template({
        ...options,
        ...strings
      }),
      move(destination)
    ]);

    const rule = mergeWith(sourceParametrizedTemplates, MergeStrategy.Default);
    return rule(tree, _context);
  }
}

export default function(schema: any): Rule {
  if (!schema.name.startsWith('auth-')) {
    throw new Error(`Auth modules must be prefixed with 'auth-'`);
  }

  return chain([
    externalSchematic('@schematics/angular', 'module', {
      project: schema.project,
      name: schema.name,
      routing: true,
      module: 'app.module.ts'
    }),
    externalSchematic('@schematics/angular', 'service', {
      project: schema.project,
      name: schema.name,
      path: path.join(
        'apps',
        schema.project,
        'src',
        'app',
        schema.name,
        'services'
      )
    }),
    externalSchematic('@schematics/angular', 'guard', {
      project: schema.project,
      name: schema.name,
      path: path.join(
        'apps',
        schema.project,
        'src',
        'app',
        schema.name,
        'services'
      ),
    }),
    (tree: Tree, _context: SchematicContext) => {
      const filePath = path.join(
        'apps',
        schema.project,
        'src',
        'app',
        schema.name,
        'hello-world.html'
      );
      tree.create(filePath, `<h1>Hello ${schema.name} </h1>`);
      return tree;
    },
    generateFilesFromTemplates(schema)
  ]);
}
