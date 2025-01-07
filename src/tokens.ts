import { Semantic, Theme } from "./color.js";

export default function genTokenColors({
  semantic,
  theme,
  moreGreen = false,
}: {
  semantic: Semantic;
  theme: Theme;
  moreGreen?: boolean;
}) {
  const colors: EditorColors = {
    tag: moreGreen ? theme.green : theme.magenta,
    comment: semantic.comment,
    foreground: semantic.foreground,
    function: theme.blue,
    variable: theme.green,
    keyword: theme.magenta,
    number: theme.green,
    operator: semantic.foreground,
    regexp: theme.blue,
    punctuation: semantic.punctuation,
    string: theme.red,
    invalid: theme.red,
    bracketHighlight: semantic.punctuation,
    typeName: theme.typeName,
    /* diffDeletedBg: "#f00",
    diffInsertedBg: "#f00",
    diffChangedBg: "#f00",
    diffIgnoredBg: "#f00",
    carriageReturn: "#f00", */
  };
  return createEditorTheme(colors);
}

export type EditorColors = {
  /**
   * Color of comments
   * @example // Hello World
   */
  comment: string;
  /**
   * Color of text
   * @example Hello World
   */
  foreground: string;
  /**
   * Color of function names
   * @example helloWorld
   */
  function: string;
  /**
   * Color of variable names
   * @example helloWorld
   */
  variable: string;
  /**
   * Color of language keywords
   * @example if, else, for, while, return, export, function
   */
  keyword: string;
  /**
   * Color of numbers
   * @example 123
   */
  number: string;
  /**
   * Color of operators
   * @example +, -, *, /, %, =, ==, ===, !=, !==, &&, ||, !
   */
  operator: string;
  /**
   * Color of regular expressions
   */
  regexp: string;
  /**
   * Color of delimiters and brackets
   * @example (), [], {}, ",", .
   */
  punctuation: string;
  /**
   * Color of strings
   * @example "Hello World"
   */
  string: string;
  /**
   * Color of type names
   * @example interface HelloWorld { ... } class HelloWorld { ... } type HelloWorld = string
   */
  typeName?: string;
  /**
   * Color of HTML tags
   * @example div, button
   */
  tag: string;
  invalid?: string;
  bracketHighlight?: string;
  diffDeletedBg?: string;
  diffInsertedBg?: string;
  diffChangedBg?: string;
  diffIgnoredBg?: string;
  carriageReturn?: string;
};

export function createEditorTheme(colors: EditorColors) {
  return [
    {
      scope: ["comment", "punctuation.definition.comment", "string.comment"],
      settings: {
        foreground: colors.comment,
      },
    },
    {
      scope: [
        "constant",
        "entity.name.constant",
        "variable.other.constant",
        "variable.other.member",
        "variable.other.enummember",
        "variable.language",
        "support.type.object.module",
      ],
      settings: {
        foreground: colors.variable,
      },
    },
    {
      scope: ["entity", "entity.name"],
      settings: {
        foreground: colors.function,
      },
    },
    {
      scope: ["	entity.name.type", "support.class.component"],
      settings: {
        foreground: colors.typeName,
      },
    },
    {
      scope: ["variable.parameter.function", "meta.object.member"],
      settings: {
        foreground: colors.variable,
      },
    },
    {
      scope: "entity.name.tag",
      settings: {
        foreground: colors.tag,
      },
    },
    {
      scope: "keyword",
      settings: {
        foreground: colors.keyword,
        fontStyle: "italic",
      },
    },
    {
      scope: "keyword.operator",
      settings: {
        foreground: colors.operator,
        fontStyle: "normal",
      },
    },
    {
      scope: ["keyword.operator.word"],
      settings: {
        foreground: colors.keyword,
      },
    },
    {
      scope: ["storage", "storage.type"],
      settings: {
        foreground: colors.keyword,
        fontStyle: "italic",
      },
    },
    {
      scope: ["constant.numeric"],
      settings: {
        foreground: colors.number,
      },
    },
    {
      scope: [
        "storage.modifier.package",
        "storage.modifier.import",
        "storage.type.java",
      ],
      settings: {
        foreground: colors.variable,
      },
    },
    {
      scope: [
        "string",
        "punctuation.definition.string",
        "string punctuation.section.embedded source",
      ],
      settings: {
        foreground: colors.string,
      },
    },
    // {
    //   scope: "support",
    //   settings: {
    //     foreground: colors.foreground,
    //   },
    // },
    {
      scope: "meta.property-name",
      settings: {
        foreground: colors.foreground,
      },
    },
    {
      scope: "variable",
      settings: {
        foreground: colors.variable,
      },
    },
    {
      scope: "variable.other",
      settings: {
        foreground: colors.variable,
      },
    },
    {
      scope: "invalid.broken",
      settings: {
        fontStyle: "italic",
        foreground: colors.invalid,
      },
    },
    {
      scope: "invalid.deprecated",
      settings: {
        fontStyle: "italic",
        foreground: colors.invalid,
      },
    },
    {
      scope: "invalid.illegal",
      settings: {
        fontStyle: "italic",
        foreground: colors.invalid,
      },
    },
    {
      scope: "invalid.unimplemented",
      settings: {
        fontStyle: "italic",
        foreground: colors.invalid,
      },
    },
    {
      scope: "carriage-return",
      settings: {
        fontStyle: "italic underline",
        background: colors.keyword,
        foreground: colors.carriageReturn,
        // content: "^M",
      },
    },
    {
      scope: "message.error",
      settings: {
        foreground: colors.invalid,
      },
    },
    {
      scope: "string variable",
      settings: {
        foreground: colors.foreground,
      },
    },
    {
      scope: ["source.regexp", "string.regexp"],
      settings: {
        foreground: colors.regexp,
      },
    },
    {
      scope: [
        "string.regexp.character-class",
        "string.regexp constant.character.escape",
        "string.regexp source.ruby.embedded",
        "string.regexp string.regexp.arbitrary-repitition",
      ],
      settings: {
        foreground: colors.regexp,
      },
    },
    {
      scope: "string.regexp constant.character.escape",
      settings: {
        fontStyle: "bold",
        foreground: colors.keyword,
      },
    },
    {
      scope: "support.constant",
      settings: {
        foreground: colors.foreground,
      },
    },
    {
      scope: "support.variable",
      settings: {
        foreground: colors.foreground,
      },
    },
    {
      scope: "meta.module-reference",
      settings: {
        foreground: colors.foreground,
      },
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: colors.variable,
      },
    },
    {
      scope: ["markup.heading", "markup.heading entity.name"],
      settings: {
        fontStyle: "bold",
        foreground: colors.foreground,
      },
    },
    {
      scope: "markup.quote",
      settings: {
        foreground: colors.keyword,
      },
    },
    {
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
        foreground: colors.variable,
      },
    },
    {
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
        foreground: colors.variable,
      },
    },
    {
      scope: ["markup.underline"],
      settings: {
        fontStyle: "underline",
      },
    },
    {
      scope: ["markup.strikethrough"],
      settings: {
        fontStyle: "strikethrough",
      },
    },
    {
      scope: "markup.inline.raw",
      settings: {
        foreground: colors.foreground,
      },
    },
    {
      scope: [
        "markup.deleted",
        "meta.diff.header.from-file",
        "punctuation.definition.deleted",
      ],
      settings: {
        background: colors.diffDeletedBg,
        foreground: colors.invalid,
      },
    },
    {
      scope: [
        "markup.inserted",
        "meta.diff.header.to-file",
        "punctuation.definition.inserted",
      ],
      settings: {
        background: colors.diffInsertedBg,
        foreground: colors.keyword,
      },
    },
    {
      scope: ["markup.changed", "punctuation.definition.changed"],
      settings: {
        background: colors.diffChangedBg,
        foreground: colors.variable,
      },
    },
    {
      scope: ["markup.ignored", "markup.untracked"],
      settings: {
        foreground: colors.diffIgnoredBg,
        background: colors.foreground,
      },
    },
    {
      scope: "meta.diff.range",
      settings: {
        foreground: colors.function,
        fontStyle: "bold",
      },
    },
    {
      scope: "meta.diff.header",
      settings: {
        foreground: colors.foreground,
      },
    },
    {
      scope: "meta.separator",
      settings: {
        fontStyle: "bold",
        foreground: colors.foreground,
      },
    },
    {
      scope: "meta.output",
      settings: {
        foreground: colors.foreground,
      },
    },
    {
      scope: [
        "brackethighlighter.tag",
        "brackethighlighter.curly",
        "brackethighlighter.round",
        "brackethighlighter.square",
        "brackethighlighter.angle",
        "brackethighlighter.quote",
      ],
      settings: {
        foreground: colors.bracketHighlight,
      },
    },
    {
      scope: "brackethighlighter.unmatched",
      settings: {
        foreground: colors.invalid,
      },
    },
    {
      scope: ["constant.other.reference.link", "string.other.link"],
      settings: {
        foreground: colors.regexp,
        fontStyle: "underline",
      },
    },
    {
      scope: ["punctuation", "meta.brace.round"],
      settings: {
        foreground: colors.punctuation,
      },
    },
    {
      scope: ["text.html"],
      settings: {
        foreground: colors.foreground,
      },
    },
  ];
}

/* [
  // 主要语法元素 - 使用 theme.primary (蓝色 #90aed3)
  {
    scope: [
      "entity.name.function",
      "support.function",
      "meta.function-call",
      "support.function.console",
      "string",
      "support.constant.font-name",
      "support.constant.json",
      "entity.other.attribute-name.id",
    ],
    settings: {
      foreground: theme.blue,
    },
  },

  // 常量和数字 - 使用 theme.brown (棕色 #d4ba9b)
  {
    scope: [
      "constant",
      "constant.numeric",
      "constant.language",
      "constant.character",
      "constant.other",
      "variable.other.constant",
      "support.constant",
      "meta.property-value",
      "support.constant.property-value",
      "support.constant.font-name",
      "support.constant.media",
      "support.constant.color",
      "entity.name.type.class",
      "support.class",
      // 添加以下 scope 来支持 TSX/Vue TSX 组件
      "support.class.component",
      "entity.name.type",
    ],
    settings: {
      foreground: theme.yellow,
    },
  },

  // 关键字和控制流 - 使用 theme.secondary (绿色 #9bd4b2)
  {
    scope: [
      "support.type",
      "support.class",
      "entity.name.namespace",
      "entity.other.inherited-class",
      "entity.name.tag",
      "support.type.property-name.css",
      "support.type.primitive",
      "support.type.builtin",
    ],
    settings: {
      foreground: theme.green,
    },
  },

  {
    scope: ["keyword.control", "storage.type"],
    settings: {
      foreground: theme.green,
      fontStyle: "italic",
    },
  },

  // 存储类型和修饰符 - 使用 theme.accent (紫色 #ceb0d3)
  {
    scope: [
      "storage",
      "storage.modifier",
      "keyword.operator.new",
      "keyword.operator.expression",
      "keyword.operator.logical",
      "keyword.operator.sizeof",
      "keyword.operator.instanceof",
      "entity.name.class",
      "entity.other.attribute-name",
    ],
    settings: {
      foreground: theme.magenta,
    },
  },

  // 变量和参数 - 使用 semantic.foreground
  {
    scope: [
      "variable",
      "variable.parameter",
      "variable.other.readwrite",
      "variable.other.object",
      "variable.other.property",
      "meta.definition.variable",
      "support.variable.property",
      "support.variable.object",
      "punctuation.definition",
      "punctuation.separator",
      "punctuation.terminator",
    ],
    settings: {
      foreground: semantic.foreground,
    },
  },

  // 注释 - 使用 semantic.comment (灰色 #6a6a6a)
  {
    scope: ["comment", "punctuation.definition.comment"],
    settings: {
      foreground: semantic.comment,
      fontStyle: "italic",
    },
  },

  // 特殊样式
  {
    scope: [
      "entity.other.attribute-name.id",
      "entity.other.attribute-name.class.css",
    ],
    settings: {
      fontStyle: "italic",
    },
  },

  // 无效和废弃的代码
  {
    scope: ["invalid.illegal", "invalid.deprecated"],
    settings: {
      foreground: semantic.foreground,
    },
  },

  // Markdown 特殊样式
  {
    scope: ["markup.heading", "markup.bold", "markup.italic"],
    settings: {
      foreground: theme.blue,
      fontStyle: "bold",
    },
  },

  // 模板字符串
  {
    scope: ["string.template", "punctuation.definition.template-expression"],
    settings: {
      foreground: theme.blue,
    },
  },

  // 正则表达式
  {
    scope: ["string.regexp", "constant.character.escape"],
    settings: {
      foreground: theme.green,
    },
  },

  // JSON 特殊处理
  {
    scope: ["support.type.property-name.json"],
    settings: {
      foreground: semantic.foreground,
    },
  },
  {
    scope: ["meta.structure.dictionary.json string.quoted.double"],
    settings: {
      foreground: theme.blue,
    },
  },

  // Git 装饰器颜色
  {
    scope: ["gitDecoration.modifiedResourceForeground"],
    settings: {
      foreground: theme.yellow,
    },
  },
  {
    scope: ["gitDecoration.untrackedResourceForeground"],
    settings: {
      foreground: theme.green,
    },
  },
  {
    scope: ["gitDecoration.deletedResourceForeground"],
    settings: {
      foreground: theme.red,
    },
  },
]; */
