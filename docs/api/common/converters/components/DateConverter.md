---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation DateConverter class
---
# DateConverter <Badge text="Class" type="class"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { DateConverter }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/common/src/converters/components/DateConverter"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/TypedProject/ts-express-decorators/blob/v5.18.0/packages/common/src/converters/components/DateConverter.ts#L0-L0">/packages/common/src/converters/components/DateConverter.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang "><span class="token keyword">class</span> DateConverter <span class="token keyword">implements</span> <a href="/api/common/converters/interfaces/IConverter.html"><span class="token">IConverter</span></a> <span class="token punctuation">{</span>
    <span class="token function">deserialize</span><span class="token punctuation">(</span>data<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">Date</span><span class="token punctuation">;</span>
    <span class="token function">serialize</span><span class="token punctuation">(</span>object<span class="token punctuation">:</span> <span class="token keyword">Date</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>



<!-- Description -->
## Description

::: v-pre

Converter component for the `Date` Type.

:::


<!-- Members -->




## Members


::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang "><span class="token function">deserialize</span><span class="token punctuation">(</span>data<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">Date</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang "><span class="token function">serialize</span><span class="token punctuation">(</span>object<span class="token punctuation">:</span> <span class="token keyword">Date</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span></code></pre>

</div>



:::