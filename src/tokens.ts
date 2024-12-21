import { Semantic, Theme } from "./color.js";

export default function genTokenColors({
  semantic,
  theme,
}: {
  semantic: Semantic;
  theme: Theme;
}) {
  return [
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
  ];
}
